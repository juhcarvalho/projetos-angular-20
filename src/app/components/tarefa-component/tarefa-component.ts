import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa',
  imports: [],
  standalone: true,
  templateUrl: './tarefa-component.html',
  styleUrl: './tarefa-component.scss'
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa;
  @Output() tarefaAtualizada = new EventEmitter<Tarefa>();

  marcarComoConcluida() {
    const tarefaAtualizada = { ...this.tarefa, concluida: true };
    this.tarefaAtualizada.emit(tarefaAtualizada);
  }

}
