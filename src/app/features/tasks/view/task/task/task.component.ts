import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Meu quadro de Tarefas</h1>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {}
