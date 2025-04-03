import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CategoryService } from '../../../service/category.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [MatDividerModule, CommonModule, AsyncPipe, MatButtonModule],
  template: `
    <section class="flex flex-col gap-4 w-full">
      <mat-divider class="opacity-50 w-full"></mat-divider>
      <div class="flex flex-wrap pl-1">
        <div
          class="flex flex-wrap items-center h-full
          gap-4">
          @for (categories of categorias$(); track categories.id) {
            <button
              [style.backgroundColor]="categories.color"
              mat-flat-button
              type="button">
              {{ categories.name }}
            </button>
          }
        </div>
      </div>
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent {
  private readonly categoryService = inject(CategoryService);
  public categorias$ = this.categoryService.categorias;
}
