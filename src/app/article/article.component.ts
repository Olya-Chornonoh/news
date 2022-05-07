import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../types/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  article?: Article;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchArticle(`${id}`);
  }
  
  fetchArticle(id: string) {
    this.articlesService.getArticle(id).subscribe({
      next:(value) => {
        this.article = value;
      }
    });
  }

  onBack() {
    this.location.back();
  }
}
