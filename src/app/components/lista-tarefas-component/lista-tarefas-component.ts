import { Component, computed, signal } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';
import { CommonModule } from '@angular/common';
import { TarefaComponent } from '../tarefa-component/tarefa-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  imports: [CommonModule, FormsModule , TarefaComponent ],
  templateUrl: './lista-tarefas-component.html',
  styleUrl: './lista-tarefas-component.scss'
})
export class ListaTarefasComponent {
  tarefas = signal<Tarefa[]>([
    { id: 1, nome: 'Estudar Java',concluida: false },
    { id: 2, nome: 'Estudar C#', concluida: false },
    { id: 3, nome: 'Revisar conteúdo', concluida: true }
  ]);


  tituloNovaTarefa = signal('');

  tarefasPendentes = computed(() =>
    this.tarefas().filter(t => !t.concluida).length
  );

  adicionarTarefa() {
    const titulo = this.tituloNovaTarefa().trim();
    if (titulo) {
      const novaTarefa: Tarefa = {
        id: Date.now(),
        nome: titulo,
        concluida: false
      };
      this.tarefas.update(lista => [...lista, novaTarefa]);
      this.tituloNovaTarefa.set('');
    }
  }

  atualizarTarefa(tarefaAtualizada: Tarefa) {
    this.tarefas.update(lista =>
      lista.map(t => (t.id === tarefaAtualizada.id ? tarefaAtualizada : t))
    );
  }
}
