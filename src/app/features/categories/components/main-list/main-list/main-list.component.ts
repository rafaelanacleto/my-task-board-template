import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-main-list',
  standalone: true,
  providers: [],
  imports: [CommonModule, AsyncPipe],
  template: `
    <section class="mt-4 mx-4 pl-6">
      <div
        class="flex flex-col justify-between items-center  h-full w-full gap-4">
        <h2 class="text-2xl font-bold">Categorias</h2>
        <ul>
          @for (categories of categorias$(); track categories.id) {
            <li
              class="flex flex-col justify-between items-center  h-full w-full gap-4">
              <div class="flex flex-row justify-between items-center w-full">
                <span class="text-lg font-bold">{{ categories.name }}</span>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainListComponent {
  private readonly categoryService = inject(CategoryService);
  public categorias$ = this.categoryService.categories;

  constructor() {}
}
