import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderBy } from 'lodash';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../types/article';

const getWordRegexp = (word: string) => new RegExp(`(?<=\\s)\\b${word}\\b`, 'gi');

function stringHasKeywords(value: string, keywords: string[]): boolean {
  return keywords.reduce((prev: boolean, curr: string) => {
    return prev || getWordRegexp(curr).test(value);
  }, false);
}

function numberOfKeywords(value: string, keywords: string[]): number {
  return keywords.reduce((prev: number, curr: string) => {
    return prev + (getWordRegexp(curr).test(value) ? 1 : 0);
  }, 0);
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchQuery = '';
  keywords: string[] = [];
  
  constructor(private articlesService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.fetchArticles();
  }

  private fetchArticles() {
    this.articlesService.getArticles().subscribe({
      next: (values) => {
        this.articles = values;
        this.filteredArticles = values;
      }
    });
  }

  forwardToArticle(id: number) {
    this.router.navigateByUrl(`/article/${id}`);
  }

  onSearch(value: string) {
    this.searchQuery = value;

    this.keywords = value.split(' ').map((keyword) => keyword.toLowerCase()).filter(Boolean);

    if (this.keywords.length === 0) {
      this.filteredArticles = this.articles;
      return;
    }

    this.filteredArticles = orderBy(this.articles.filter((element) =>{
      const isInTitle = stringHasKeywords(element.title, this.keywords);

      const isInSummary = stringHasKeywords(element.summary, this.keywords);

      return isInTitle || isInSummary;
    }), [
      (element) => numberOfKeywords(element.title, this.keywords),
      (element) => numberOfKeywords(element.summary, this.keywords),
    ], ['desc', 'desc']);
  }
}
