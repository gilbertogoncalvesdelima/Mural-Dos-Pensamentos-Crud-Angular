import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

// Rotas da aplicação
const routes: Routes = [
  {
    // 0 Rota criada, caminho vazio
    path: '',
    // Quando a pessoa acessar a rota pela primeira vez e não está em nenhuma rota especifica, redirecionada para principal
    redirectTo: 'listarPensamento',
    // Existe dois metodos, full ou prefix, o full ele verifica toda a URL, agora o prefix verifica apenas o localhost:4200
    pathMatch: 'full'
  },
  {
    // 1 Rota criada
    path: 'criarPensamento',
    // Qual componente, aparecer, depois de estar na rota
    component: CriarPensamentoComponent
  },
  {
    // 2 Rota criada
    path: 'listarPensamento',
    // Qual componente, aparecer, depois de estar na rota
    component: ListarPensamentoComponent
  },
  {
    // 3 Rota criada
    path: 'pensamentos/excluirPensamento/:id',
    // Qual componente, aparecer, depois de estar na rota
    component: ExcluirPensamentoComponent
  },
  {
    // 3 Rota criada
    path: 'pensamentos/editarPensamento/:id',
    // Qual componente, aparecer, depois de estar na rota
    component: EditarPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
