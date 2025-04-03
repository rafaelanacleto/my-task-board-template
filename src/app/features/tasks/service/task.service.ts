import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Task } from '../model/task.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = environment.apiUrl + '/tasks';
  private readonly httpClient = inject(HttpClient);

  public tasks = signal<Task[]>([]);

  public getTask(): Observable<Task[]> {
    return this.httpClient
      .get<Task[]>(this.apiUrl)
      .pipe(tap(tasks => this.tasks.set(tasks)));
  }
}
