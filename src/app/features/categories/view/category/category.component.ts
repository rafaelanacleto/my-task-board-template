import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MainListComponent } from '../../components/main-list/main-list/main-list.component';
import { ColorsListComponent } from '../../components/colors-list/colors-list/colors-list.component';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule,
    MatDividerModule,
    MainListComponent,
    ColorsListComponent,
  ],
  template: `
    <div class="flex flex-col items-center justify-center h-screen">
      <!-- main list -->
      <app-main-list></app-main-list>
      <mat-divider></mat-divider>
      <!-- div botoes -->
      <app-colors-list></app-colors-list>
    </div>
  `,
  styles: ``,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {}
