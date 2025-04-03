import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Categoria } from '../model/category.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiUrl + '/categories';
  private readonly httpClient = inject(HttpClient);

  private categories$ = this.httpClient.get<Categoria[]>(this.apiUrl);
  // Signal to store the categories
  // Using signal to store the categories
  // This will be used to update the categories in the component
  public categories = toSignal(this.categories$);
}
