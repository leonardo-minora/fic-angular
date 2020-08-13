import { Component } from '@angular/core';

@Component({
    selector: 'app-tarefa',
    templateUrl: './tarefa.component.html'
})
export class TarefaComponent {
    mostraMensagem = false;
    nome: string  = 'Minha nova tarefa fixa';
    tarefas = [];

    constructor() {}

    tarefaVazia() {
        return this.nome.length > 0;
    }

    onAdicionarTarefa() {
        this.mostraMensagem = true;
        setTimeout(
            () => { this.mostraMensagem = false; },
            2000
        );

        let tarefa = new Tarefa(this.tarefas.length+1, this.nome);
        this.tarefas.push(tarefa);
        this.nome = '';
    }
}

class Tarefa {
    id: number = 0;
    titulo: string = '';

    constructor(id: number, titulo: string) {
        this.id = id;
        this.titulo = titulo;
    }
}