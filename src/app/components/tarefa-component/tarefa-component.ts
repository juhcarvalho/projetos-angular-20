import { Component, effect, EventEmitter, Input, Output, signal } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa',
  imports: [],
  standalone: true,
  templateUrl: './tarefa-component.html',
  styleUrl: './tarefa-component.scss'
})
export class TarefaComponent {

  private _tarefa = signal<Tarefa>({ id: 0, nome: '', concluida: false });

  @Input() set tarefa(value: Tarefa) {
    this._tarefa.set(value);
  }

  get tarefa(): Tarefa {
    return this._tarefa();
  }
  
  @Output() tarefaAtualizada = new EventEmitter<Tarefa>();

  marcarComoConcluida() {
    this._tarefa.update(t => ({ ...t, concluida: true }));
    this.tarefaAtualizada.emit(this._tarefa());
  }

  reativarTarefa() {
    this._tarefa.update(t => ({ ...t, concluida: false }));
    this.tarefaAtualizada.emit(this._tarefa());
  }

}
