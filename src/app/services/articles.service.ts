import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl = 'https://api.spaceflightnewsapi.net/v3';

  constructor (private http: HttpClient) { }

  getArticles() {
    return this.http.get<any[]>(`${this.baseUrl}/articles`);
  }

  getArticle(id: string) {
    return this.http.get<any>(`${this.baseUrl}/articles/${id}`);
  }
}
