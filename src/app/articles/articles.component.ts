import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../types/article';

function stringHasKeywords(value: string, keywords: string[]): boolean {
  return keywords.reduce((prev: boolean, curr: string) => {
    return prev || value.toLowerCase().includes(curr.toLowerCase());
  }, false);
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
        
        console.log(this.articles);
      }
    });
  }

  forwardToArticle(id: number) {
    console.log("click ", id);
    this.router.navigateByUrl(`/article/${id}`);
  }

  onSearch(value: string) {
    this.searchQuery = value;

    this.keywords = value.split(' ').filter(Boolean);

    this.filteredArticles = this.articles.filter((element) =>{

      const isInTitle = stringHasKeywords(element.title, this.keywords);

      const isInSummary = stringHasKeywords(element.summary, this.keywords);

      return isInTitle || isInSummary;
    });
  }
}
