import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit {

  articles: any[] = [];
  
  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.fetchArticles();
  }

  private fetchArticles() {
    this.articlesService.getArticles().subscribe({
      next: (values) => {
        this.articles = values;
        
        console.log(this.articles);
      }
    });
  }
}
