import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [MatDividerModule],
  template: `
    <section class="flex flex-col gap-4 w-full">
      <mat-divider class="opacity-50 w-full"></mat-divider>
      <span>Titulo colors...</span>
      botoes categ
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent {}
