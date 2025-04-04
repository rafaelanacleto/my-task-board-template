import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CategoryService } from '../../../service/category.service';
import { MatButtonModule } from '@angular/material/button';
import { categoryBackgroundColors } from '../../../constants/category-colors';

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [MatDividerModule, CommonModule, AsyncPipe, MatButtonModule],
  template: `
    <section class="flex flex-col gap-4 w-full h-auto mb-8">
      <mat-divider class="opacity-50 w-full"></mat-divider>
      <div class="flex flex-wrap pl-1">
        <div class="flex flex-wrap gap-4">
          @for (categories of categorias(); track categories.id) {
            <span
              class="text-white {{
                categoryBackGroundColor[categories.color || 'default']
              }} px-4 py-2 mt-4 rounded-md text-sm font-semibold cursor-pointer hover:opacity-80 transition-opacity duration-200 ease-in-out">
              {{ categories.name }}
            </span>
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
  public categorias = this.categoryService.categories;
  public categoryBackGroundColor = categoryBackgroundColors!;
}
