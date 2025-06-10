import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consulta-tarefas',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './consulta-tarefas.component.html',
  styleUrl: './consulta-tarefas.component.css'
})
export class ConsultaTarefasComponent {

    //Atributos
    tarefas: any[] = []; //array de objetos vazio

    //injeções de dependência
    http = inject(HttpClient);
    
    //Função executada sempre que a página / componente é aberto
    ngOnInit() {
      //executando a consulta de tarefas na API
      this.http.get(environment.apiTarefas + "/tarefas")
        .subscribe((response) => {
          this.tarefas = response as any[];
        });
    }

    //Função para excluir uma tarefa
    onDelete(tarefa: any) {

      //Exibindo uma mensagem de confirmação
      if(confirm(`Deseja realmente excluir a tarefa: ${tarefa.titulo}?`)) {

        //Realizando a exclusão da tarefa na API
        this.http.delete(environment.apiTarefas + "/tarefas/" + tarefa.id)
          .subscribe((response: any) => { //capturando a resposta da API
            alert(`Tarefa ${tarefa.titulo} excluída com sucesso!`);
            this.ngOnInit(); //recarregando a lista de tarefas
          });
      }
    }
}
