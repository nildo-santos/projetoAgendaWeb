import { Routes } from '@angular/router';
import { CadastroTarefasComponent } from './components/pages/cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './components/pages/consulta-tarefas/consulta-tarefas.component';
import { EdicaoTarefasComponent } from './components/pages/edicao-tarefas/edicao-tarefas.component';

export const routes: Routes = [
    {
        path: 'pages/cadastro-tarefas', //rota
        component: CadastroTarefasComponent //componente
    },
    {
        path: 'pages/consulta-tarefas', //rota
        component: ConsultaTarefasComponent //componente
    },
    {
        path: 'pages/edicao-tarefas/:id', //rota
        component: EdicaoTarefasComponent //componente
    }
];
