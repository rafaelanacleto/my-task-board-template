import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryComponent } from '../../features/categories/view/category/category.component';
import { TaskComponent } from '../../features/tasks/view/task/task/task.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CategoryComponent, MatDividerModule, TaskComponent],
  template: `
    <div class="h-screen flex w-full">
      <app-category class="w-1/4 border-2 border-blue-400"></app-category>

      <mat-divider class="h-full opacity-20" [vertical]="true"></mat-divider>

      <div class="w-3/4">
        <app-task class="w-full h-full"></app-task>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
