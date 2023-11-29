import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

@NgModule({
  // Componentes Declarados e importados
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent
  ],
  imports: [
    // O BrowserModule configura os serviços necessários para manipulação do DOM (Modelo de Objeto de Documento) em um ambiente de navegador.
    BrowserModule,
    // AppRoutingModule, é um módulo que normalmente é usado para configurar as rotas do aplicativo.
    AppRoutingModule,
    //FormsModule, Ele oferece uma variedade de recursos e diretivas que facilitam a interação com formulários HTML e a validação de dados do usuário exemplo, Controle de Estado do Formulário, Two-Way Data Binding, Permite o uso do [(ngModel)] para alcançar o two-way data binding entre campos de formulário e propriedades do componente. Isso significa que as alterações nos campos do formulário refletirão automaticamente nas propriedades do componente e vice-versa.
    FormsModule,
    //HttpClientModule, Ele oferece um conjunto de recursos que simplificam a comunicação com servidores HTTP, como a execução de requisições GET, POST, PUT, DELETE e a manipulação de respostas.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
