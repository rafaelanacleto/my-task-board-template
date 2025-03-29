import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [],
  template: `<p>colors-list works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent {}
