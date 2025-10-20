import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTarefasComponent } from "./components/lista-tarefas-component/lista-tarefas-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaTarefasComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projetos-angular-20');
}
