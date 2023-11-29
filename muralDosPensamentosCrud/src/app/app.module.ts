import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    HttpClientModule,
    //  você tem acesso a classes e serviços que facilitam a criação e gerenciamento de formulários reativos. Algumas das classes e conceitos-chave incluem:      FormGroup: Representa um grupo de controles em um formulário. Ele agrupa os controles e rastreia o valor e o estado do grupo.       FormControl: Representa um único controle em um formulário, como um campo de texto ou uma caixa de seleção. Ele mantém o valor atual do controle e seu estado (válido, inválido, etc.).       FormArray: Representa uma matriz de controles. Pode ser usado quando você precisa lidar com uma coleção dinâmica de controles, por exemplo, uma lista de itens em um formulário.      Validators: Uma classe que contém vários validadores pré-definidos que podem ser usados para validar os valores dos controles.       AbstractControl: Uma classe base para FormGroup, FormControl, e FormArray.       Ao usar ReactiveFormsModule, você define e configura seu formulário no código TypeScript do componente em vez de no template HTML. Isso permite que você lide com lógica mais complexa, como validação condicional, reações a eventos assíncronos, e manipulação dinâmica de formulários.
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
