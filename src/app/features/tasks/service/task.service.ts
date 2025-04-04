import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Task } from '../model/task.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = environment.apiUrl + '/tasks';
  private readonly _httpClient = inject(HttpClient);
  public tasks = signal<Task[]>([]);
  public numberOfTask = computed(() => this.tasks().length);

  public getTask(): Observable<Task[]> {
    return this._httpClient.get<Task[]>(this.apiUrl).pipe(
      tap(tasks => {
        const sort = this.getSortedTasks(tasks);
        this.tasks.set(sort);
      })
    );
  }

  public addTask(task: Partial<Task>): Observable<Task> {
    return this._httpClient.post<Task>(this.apiUrl, task).pipe(
      tap(newTask => {
        const sort = this.getSortedTasks(this.tasks());
        this.tasks.update(tasks => [...tasks, newTask]);
        this.tasks.set(sort);
      })
    );
  }

  public getSortedTasks(tasks: Task[]): Task[] {
    return tasks.sort((a: Task, b: Task) => a.title.localeCompare(b.title));
  }

  public deleteTask(id: string): Observable<void> {
    return this._httpClient
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(() =>
          this.tasks.update(tasks => tasks.filter(task => task.id !== id))
        )
      );
  }
  public updateTask(task: Task): Observable<Task> {
    return this._httpClient.put<Task>(`${this.apiUrl}/${task.id}`, task).pipe(
      tap(updatedTask => {
        this.tasks.update(tasks => {
          const index = tasks.findIndex(t => t.id === updatedTask.id);
          if (index !== -1) {
            tasks[index] = updatedTask;
          }
          return tasks;
        });
      })
    );
  }
}
