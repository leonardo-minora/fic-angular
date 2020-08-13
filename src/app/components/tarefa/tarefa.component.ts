import { Component } from '@angular/core';

@Component({
    selector: 'app-tarefa',
    templateUrl: './tarefa.component.html'
})
export class TarefaComponent {
    nome: string  = 'Minha nova tarefa fixa';

    constructor() {}
}