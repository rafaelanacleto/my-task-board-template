import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Categoria } from '../model/category.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiUrl + '/categories';
  private readonly httpClient = inject(HttpClient);
  // private apiUrl = 'http://localhost:3000/categories';
  // private apiUrl = 'https://api.example.com/categories';

  public categorias = signal<Categoria[]>([]);

  public getCategories(): Observable<Categoria[]> {
    return this.httpClient
      .get<Categoria[]>(this.apiUrl)
      .pipe(tap(categorias => this.categorias.set(categorias)));
  }
}
