import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MainListComponent } from '../../components/main-list/main-list/main-list.component';
import { ColorsListComponent } from '../../components/colors-list/colors-list/colors-list.component';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule,
    MatDividerModule,
    MainListComponent,
    ColorsListComponent,
    AsyncPipe,
  ],
  template: `
    <div
      class="flex flex-col justify-between items-center  h-full w-full gap-4">
      @if (categorias$ | async) {
        <!-- main list -->
        <app-main-list></app-main-list>
        <mat-divider></mat-divider>
        <!-- div botoes -->
        <app-colors-list></app-colors-list>
      } @else {
        <h2>Goodbye</h2>
      }
    </div>
  `,
  styles: ``,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  private readonly categoryService = inject(CategoryService);
  public categorias$ = this.categoryService.getCategories();
}
