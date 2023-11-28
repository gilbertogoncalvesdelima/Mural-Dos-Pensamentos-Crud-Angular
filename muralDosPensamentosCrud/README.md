# Mural-de-Lembretes-Crud-Angular 👋

## Sobre o projeto:

Moral de pensamentos, você poderá colocar sitação de livros, trechos de musicas e aquelas frases legais para colocar como legenda.

## Regras de negócios: 

Ao clicar no botão editar pensamento, ai você irá para segunda tela, que será a pagina de cadastro, aonde irá conter, um imput, para escrever um novo pensamento, e outro imput, que no caso, será o nome da autoria ou fonte, também irá conter o modelo das aspas coloridas, para determinar, que cada cor será um tema diferente, depois de salvo o pensamento irá aparecer no mural, o que foi escrito e também poderá, editar ou excluir, do mural caso você tiver interesse.

## Projeto, Angular, apresentação

O projeto será desenvolvido em Angular CLI, com ela, será criado o projeto e terá diversos tipos de arquivos e serviços e também conterá um componente para cada aplicação, vamos criar um componente para o card, nosso formulario será outro componente e o mural de pensamentos será outro componente, assim ficando organizado toda a estrutura do projeto, também vamos entender como acontece o fluxo de informações dentro do componente, vamos utilizar rotas, para adiconar navegação dinamica, entre as telas, exemplo: ao clicar no botão adiconar pensamento será direcionado para o formulário, também vamos utilizar as principais diretivas do angular, para renderizar as diretivas do card vamos utilizar a diretiva ngFor e também conterá os services e como utulizar a injeção de dependências e também vamos utilizar requisições http, através do Http Client, para poder utilizar os metodos, get, post, put e delete e fazer todas estas funcionalidades, vamos utilizar o typescript, para fazer a tipagem.

## Porque utilizar o Angular

O Angular é um framework, front end, criado para desenvolver aplicações de página única, single-page application (SPA), é considerado uma plataforma de desenvolvimento, ele possui uma estrutura baseada em componentes, para criar aplicativos web, escalaveis, alem disse ele nos fornece uma coleção de bibliotecas integradas, que vao ajudar a gerenciar formulários, rotas da sua aplicação, auxiliar com a comunicação cliente e servidor, entre diversas outras finalidades e também nos fornece um conjunto de ferramentas, onde noos permite criar e testar e atualizar nosso código de uma forma muito mais facil, ao todo já temos quase 2 milhões de pessoas e desenvolvedores em todo o mundo, utilizando ele.


## Figma, layout

[Figma](https://www.figma.com/proto/V7AgehdRqeyJaizG6O3Slo/Mural-de-Lembretes-Crud---Gilberto-Gon%C3%A7alves-de-Lima?type=design&node-id=148-27&t=7nfsjqeqlX4eOUXA-0&scaling=min-zoom&page-id=148%3A26&starting-point-node-id=148%3A67)

## Preparação do ambiente

Documentação do angular, para mais detalhes da instalação ou até mesmo estudar como funciona as particularidades do angular, que é uma biblioteca com varias finalidades.
[Documentação-Angular](https://angular.io/cli)

Ambiente de desenvolvimento
Neste curso, vamos conhecer vários recursos do Angular CLI, uma interface de linha de comando usada para facilitar a construção de aplicações, desde a criação de um projeto, estrutura base, criação de componentes, de serviços e com o build da aplicação.

Para instalar o Angular CLI (versão do curso 14.0) é necessário ter o NodeJS (versão v20.9.0) a última versão é recomendada instalado e usaremos o VSCode como editor de código.

Para verificar, se já contém o node instalado, basta fazer o comando 

```js
node -v
```

Para instalar o Angular CLI, abra seu terminal e utilize o seguinte comando:
Versão utilizada do angular neste projeto é a 14.0.3

```js 
npm install -g @angular/cli@14.0.3
```
Após instalarmos a ferramenta vamos usá-la para criar o projeto, em seguida vá até o diretório que deseja construir sua aplicação e execute o comando a seguir:

```js
ng new muralDosPensamentosCrud
```

Durante a instalação, será necessário responder duas perguntas. A primeira será se deseja criar um arquivo responsável pelo gerenciamento das rotas, vamos responder sim, e a segunda será sobre qual estilo deseja usar no projeto, escolha o CSS.

Lembrando que após criado o projeto, sua dependencias já foram instaladas, ficara tudo na pasta node_modules, caso for clonar este projeto depois, você deve, fazer o npm install, para que todas as dependencias do projeto seja instaladas novamente, pois quando salvamos os codigos no github, algumas coisas são ignoradas, para evitar ter acumulos de codigos, no arquivo .gitgnore, você pode determinar quais arquivos vâ para o github, assim ficando muito mais leve, quando clonamos o projetos outra vez e assim fazer o npm install que ele já irá instalar as dependencias outra vez, as dependencias do projeto são declarada no arquivo criado package.json, irá conter as dependencias de produção ou de desenvolvimento, aquelas que precisamos quando estiver desenvolvendo, karma e jasmine que são para testes unitários, o typescript, para fazer a parte de tipagem e o angular Cli e diversos outros.

Com o projeto criado, vamos ver como é a cara inicial deste projeto? Para isso, vamos usar o comando cd muralDosPensamentosCrud para entrar no diretório do projeto e com a ajuda do CLI.

Para executar o projeto.

Aqui você precisa clicar no link, que foi criado para teste

```js 
ng serve
```
ou

Aqui ele já abre o link no nosso navegador

```js 
ng serve --open
```


Tudo ocorreu bem? Sim? Abra seu navegador e acesse o [LocalHost](http://localhost:4200)

## Imagens do Projeto

As imagens com a extensão .png, que foram inseridas neste projeto, dentro pasta assets, elas foram todas compactadas no site, 

[Iloveimg](https://www.iloveimg.com/pt/comprimir-imagem) , assim as imagens ficaram mais leves quando for carregadas na página, assim ficando muito mais rápido a navegação entre telas, poderiamos utilizar url's esternas, para abrir as imagens, mas neste 
projeto foi determinado desta forma.

## Conhecendo, alguns arquivos criados

Executor de testes
karma.conf.js

Configurações deste nosso projeto em especifico, que foi criado
angular.json

Arquivos de browser, suportados pelo angular
.browserslistrc

E pasta src, pasta sarce, dentro dela temos

Pasta dentro do src/app
Aqui temos nosso primeiro componente padrão quando é gerado o nosso projeto, Cada componente quando ele é criado, possui um arquivo, próprio e separado dos outros, para melhor a manutenção, .html, (template, renderizar o conteudo na tela) 

.css,(Estilos, escolido) 

.spec.ts, (Testes unitários) 

app.component.ts (Ele possui por padrão quando é criado um decorator, @Component, este decoretor indica para o angular que ele é um componente, nele temos um seletor, tem um app-root, ele está no arquivo, index.html, temos uma tag body e dentro um app-root ai o angular irá entender e renderizar, temos um templateUrl, referenciado qual arquivo, html, referente a este componente, styleUrls, que etá se referenciado qual o arquivo .css deste componente)

Pasta dentro do src/app/app-routing.module.ts
Quando criamos o projeto, foi dito se queria, que criasse o arquivo de rotas, então é este arquivo que foi criado, aqui que vamos configurar, todas as nossas rotas de nossa aplicação.

Pasta dentro do src/app/app-module.ts
O Modulo é aonde você organiza, de forma logica a sua aplicação, ele é uma class, que possui o decorator, @ngModule, aomde possui esta estrutura, o declarations, aonde você irá incluir todos os seus componentes alem de outros, como diretivas e pipes que estão contidos no seu modulo, no imports: você ira incluir os modulos importados, tanto da sua aplicação, como um outro de uma biblioteca esteja usando, como angular matiriu, exemplo. Providers: declaramos a classe dos serviços, e no export, aonde colocamos, todos os componentes, alem de diretivas, pipes que nos queremos exportar para fora do modulo, para que seja visivel por outros modulos, o nosso modulo principal ira conter esta propriedade, bootstrap, que indica qual o componente que será renderizado em nossa aplicação, neste caso aqui será o appComponent.
Entao no app.module, sera carregado o primeiro componente, AppComponent


Aonde teremos o estilo global, de nossa aplicação
style.css

Caso você precisa dar suporte, a browser mais antigos
polyfills.ts

Pasta, environments 

Variaveis de desenvolvimento de produção
environment.prod.ts

variaveis de desenvolvimento
environment.ts

Pasta assets, aonde podemos incluir imagens

Arquivo de entrada, ele responsavel de carregar o modulo principal de nossa aplicação, que é o AppModule 
main.ts

Pagina unica do nosso spa
index.html

## ng generate component

## Criando um componente dentro de uma pasta especifica

```js
$ ng g c --module pages pages/details
```

## Como criar um componente

Aqui iremos criar um componente

```js
ng generate component primeiro-componente
```

ou

```js
ng g c primeiro-componente
```

## Agora se quiser criar um componente sem o teste unitário

```js
ng g c primeiro-componente --spec=false
```

## Para criar um componente dentro de uma pasta especifica

```js
ng g c /nomedapasta/nomedoquivo
```

Um dos artefatos mais importantes para o desenvolvimento com Angular, um componente pode ser criado de forma bastante simples, utilizando o comando ng generate component <nome>.

```js
ng generate component favorito
```
O resultado da execução desse comando é:

```js
ng generate component favorito
installing component
 create src/app/favorito/favorito.component.css
 create src/app/favorito/favorito.component.html
 create src/app/favorito/favorito.component.spec.ts
 create src/app/favorito/favorito.component.ts
 update src/app/app.module.ts
 ```

 Observe que além de criar um novo diretório e os quatro arquivos necessários para um componente, esse comando também atualiza o arquivo app.module.ts, com o objetivo de incluir nele os dados necessárias para informar ao Angular sobre esse novo componente.

### Parâmetros:

Para esse comando, podemos especificar os parâmetros apresentados na Tabela.

- --flat

Descrição: Flag que indica se deve ser criado um diretório no qual os arquivos do componente serão colocados. Valor padrão: true.

- --inline-style

Descrição: Colocar os estilos (CSS) inline, dentro do próprio arquivo ts, ao invés de criar um arquivo em separado para eles. Valor padrão: false.

- --inline-template

Descrição: Colocar os templates inline, dentro do próprio arquivo ts, ao invés de criar um arquivo em separado. Valor padrão: false.

- --prefix <string>

Descrição: Define o prefixo do seletor do componente. Caso não informado, é utilizado o prefixo padrão da aplicação (valor "app" ou outro definido a partir do parâmetro prefix do comando ng new).

- --spec

Descrição: Define se o arquivo de teste com extensão .spec.ts deve ser criado. Valor padrão: true.

- --view-encapsulation <string>

Descrição: Informa a estratégia de encapsulamento da View, que é relacionada ao uso do Shadow DOM (HTML 5) por sua aplicação de forma nativa ou emulada.

- --change-detection <string>

Descrição: Define a estratégia de detecção de mudanças que o componente deve usar.

- --skip-import

Descrição: Define se o novo componente deve ser automaticamente importado no módulo para o qual ele foi criado. Caso contrário, será necessário importá-lo manualmente.

- --module <string>

Descrição: Define para qual módulo da aplicação este componente deve ser criado.

- --export

Descrição: Define se o componente é visível para outros módulos.

- --app <string>

Descrição: É possível definir várias aplicações no arquivo angular-cli.json contendo diferentes configurações. Este parâmetro especifica para qual dessas aplicações o componente deve ser criado. Por padrão, é a primeira aplicação informada no arquivo angular-cli.json.

## VsCode, Editor de código

Está sendo utilizado o editor de código VsCode, para codar o código.

Extensões utilizadas, no VsCode:
Existem várias opções de extensões do VS Code para nos auxiliar durante o desenvolvimento e quero compartilhar com você as que eu uso no meu dia a dia.
A principal é a Angular Extension Pack, um pacote com algumas das extensões mais populares entre as pessoas desenvolvedoras.
Você pode escolher algumas ou instalar o pacote, com todas elas.
Para isso, com o VS Code aberto, clique no ícone de extensões, pesquise por Angular Extension Pack e depois clique em Install.

Angular Extension Pack
Auto Import

## Rotas do projeto

O routerLink inicia a navegação do componente, que será renderizado na diretiva <router-outlet>.

## BAck-End

 Para executar todas aquelas tarefas do "CRUD", precisamos de uma API (interface de programação de aplicações) já pronta.

Para facilitar, vamos realizar uma simulação simples de back-end com uma ferramenta chamada JSON Server — uma biblioteca capaz de criar um REST JSON simulando uma API. Basta instalá-la e criar um arquivo .json, expondo as informações na API REST.

No explorador à esquerda do VS Code acessaremos a pasta MEMOTECA, e dentro dela criaremos a pasta backend. No terminal, acessaremos essa pasta com o comando cd backend.


```js
cd backend
```

Dentro da pasta digitaremos o comando para criar o arquivo package.json.

```js
npm init -y
```
Também instalaremos o JSON Server.

```js
npm i json-server
```
Criaremos dentro da pasta backend o arquivo db.json, que conterá todos os recursos (ou endpoints) da API. Acessaremos o arquivo e criaremos um objeto que possuirá um arranjo de pensamentos.

```js
{
    "pensamentos": []
}
```
Como teste, criaremos três pensamentos. Copie e cole o trecho de código abaixo dentro do arranjo. Se quiser, pode trocar o conteúdo das strings e criar os pensamentos que quiser.

Como teste, criaremos três pensamentos. Copie e cole o trecho de código abaixo dentro do arranjo. Se quiser, pode trocar o conteúdo das strings e criar os pensamentos que quiser.

```js
{
    "pensamentos": [
        {
            "id": 1,
            "conteudo": "Que bom que vc veio",
            "autoria": "Nay",
            "modelo": "modelo1"
        },
        {
            "id": 2,
            "conteudo": "Estudando Angular",
            "autoria": "Dev Alura",
            "modelo": "modelo2"
        },
        {
            "id": 3,
            "conteudo": "Angular é o melhor'",
            "autoria": "Dev Alura",
            "modelo": "modelo3"
        }
    ]
}
```

Acessaremos em seguida o package.json. Na seção "scripts": {} temos o código abaixo:

```js
"test": "echo \"Error: no test specified\" && exit 1"
```
Mudaremos o comando "test" para "start" e substituiremos o conteúdo das aspas duplas.

```js
"start": "json-server --watch db.json --port 3000"
```
Dessa forma, configuramos o JSON Server para consultar o arquivo db.json e executar a API na porta 3000.

Como teste, vamos executar um comando no terminal, ainda dentro da pasta backend.

```js
npm start
```
O terminal passará a carregar os recursos. A mensagem "Hi!" aparecerá e também será possível ver o nosso recurso ou endpoint na seção "Resources".

Resources
[Localhost](http://localhost:3000/pensamentos)

## Interface, tipando o que é um string e um number

Para evitar que ocorram erros na base de dados e garantir a sua integridade, devemos criar um modelo de retorno da API. No Angular, chamamos este modelo de "interface", ou "tipagem estrutural".

Criaremos uma interface diretamente no explorador à esquerda. Dentro da pasta pensamentos, damos um clique com o botão direito e criamos um novo arquivo chamado pensamento.ts. Também é possível criar a interface pelo terminal, mas não faremos isso.

Dentro de pensamento.ts, criaremos uma interface de nome Pensamento, com inicial maiúscula. Nesta interface, colocaremos todos os atributos e os respectivos formatos esperados. Também incluiremos a classe export, para tornar essa interface acessível à outras classes.

```js
export interface Pensamento {
    id: number
    conteudo: string
    autoria: string
    modelo: string
}
```
Se houvessem outros atributos em nosso package.json, eles também seriam incluídos na interface.

A interface ou tipagem que construímos é como um contrato que deve ser seguido por ambas as partes — front-end e back-end.

Como a interface que inserimos ajuda dentro da aplicação? Se tivéssemos incluído um atributo com o formato errado ou se esquecêssemos de informar algum atributo, o VS Code sinalizaria o erro.

Vamos listar dois exemplos de erro:

se deixarmos de passar o atributo id, o VS Code fará uma sinalização sublinhando o nome da classe de vermelho e abrindo uma caixa de mensagem com a descrição do erro.
se passarmos o dado do id do tipo errado (uma string em vez de um number), o VS Code fará o sublinhando no nome do atributo e abrirá também uma caixa de erro.
Acessaremos três arquivos typescript e dentro deles vamos inserir a variável Pensamento, que deve receber a tipagem de Pensamento. Após o "Enter", a aplicação fará o import automático dessa variável.

A primeira inclusão será feita no arquivo pensamento.component.ts..

```js

@Input() pensamento: Pensamento = {
    id: 0, // colocamos o valor 0 pois os dados reais do `id` virão do componente "pai".
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
}
```

A segunda inclusão será feita no arquivo criar-pensamento.component.ts.

```js
   pensamento: Pensamento = {
        id: 1,
        conteudo: 'Aprendendo Angular'
        autoria: 'Dev',
        modelo: 'modelo1'
    }
```
A terceira inclusão será feita no arquivo listar-pensamento.component.ts.
Dentro do arranjo listaPensamentos[] vamos incluir a variável Pensamento como um arranjo de pensamentos adicionando colchetes []. Depois vamos deletar quaisquer dados manuais que inserimos anteriormente dentro de listaPensamentos[]. Manteremos os dois arranjos vazios, já que o conteúdo de ambos virá do back-end.

```js
listaPensamentos: Pensamento[] = [];
```

Agora estamos utilizando o modelo da interface nos três arquivos.

## Services

A estrutura do Angular é muito organizada, e cada arquivo possui uma habilidade bem definida. Portanto, como boa prática de programação, qualquer arquivo com a terminação component.ts deve conter apenas a lógica para definição dos comportamentos e possibilitar a renderização dos arquivos na tela.

Considerando essa boa prática, é necessário criar um arquivo service (serviço, em português) que contenha a lógica de negócios e que seja responsável pela comunicação com o servidor. Este arquivo contém todas as requisições ao servidor, ao mesmo tempo que nos auxilia a separar informações importantes e o modo de obtê-las.

No terminal do VS Code, criaremos um service através do comando ng g service, ou apenas ng g s, em conjunto com a descrição do caminho em que ele será criado, e depois apertaremos "Enter".

```js
ng g s componentes/pensamentos/pensamento
```
Constataremos que dois arquivos foram criados: o serviço pensamento.service.ts e o arquivo de testes pensamento.service.spec.ts. Acessaremos o arquivo do serviço através do explorador à esquerda e o analizaremos.

O arquivo service se trata de uma classe typescript que possui o decorador @Injectable do pacote @angular/core. Isso significa que esta classe é "injetável", ou seja, pode ser utilizada em outros componentes e classes através do método de injeção de dependências, que detalharemos posteriormente.

O service também possui o metadado providedIn com o valor root, que indica a disponibilidade de utilização ou injeção desta classe por toda a aplicação. Além disso, o arquivo possui um export para a classe PensamentoService e dentro dele existe um constructor. Posteriormente, adicionaremos dentro do serviço os métodos de cadastro, listagem, edição e exclusão, ou "CRUD".

```js
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PensamentoService {

    constructor() { }
}
```

## Injeção de dependências

Acessaremos o arquivo pensamento.service.ts e adicionaremos o HttpClient para conseguirmos inserir os métodos do "CRUD", pois a classe PensamentoService possui uma dependência em relação à essa classe.

Nós queremos que essa classe "venha até nós" sem instanciá-la diretamente no PensamentoService, assim como ocorre no aplicativo de entrega de refeições. Para isso, criaremos dentro do constructor um parâmetro de nome http com o modificador de acesso private, e com o tipo de dependência HttpClient. O private permite que o atributo seja declarado automaticamente como atributo da classe.

```js
export class PensamentoService {
    constructor(http: HttpClient) { }
}
```
Tenha certeza de que o HttpClient foi importado conferindo se o código abaixo foi inserido automaticamente pela aplicação. Em caso negativo, adicione essa importação manualmente.

```js
import { HttpClient } from '@angular/common/http';
```

Com estes passos concluídos, temos acesso a todos os métodos da classe HttpClient. De acordo com a documentação do Angular, a injeção de dependências é um padrão de projeto no qual uma classe solicita dependências externas ao invés de criá-las

## HTTP CLient

Dentro do VS Code acessaremos o arquivo pensamento.service.ts e utilizaremos os métodos HTTP já injetados na classe para construir o "CRUD". Começaremos pelo método de listagem, criando o atributo API.

Para conseguir a URL a ser utilizada, vamos acessar o terminal, clicar na seta ao lado direito, e depois clicar em "Git Bash" para abrir um novo terminal. Dentro do novo terminal, acessaremos a pasta backend através do comando cd backend. Em seguida, executaremos a API com o comando npm start. Depois da execução, copiaremos a URL que aparecerá na seção "Resources".


Resources

```js
http://localhost:3000/pensamentos
```
Voltando ao interior da classe, dentro do exportvamos inserir o comando abaixo:

```js
private readonly API = 'http://localhost:3000/pensamentos'
```

Ainda dentro do export, abaixo do constructor acrescentaremos o método listar.

```js
export class PensamentoService {

    private readonly API = 'http://localhost:3000/pensamentos'

    constructor(private http: HttpClient) { }

    listar() {
    }
```
Para poder utilizar o HttpClient é preciso importar o seu módulo. Acessaremos o arquivo app.module.ts e na seção imports, abaixo de outros módulos já configurados, adicionaremos uma vírgula (,) e em seguida o módulo HttpClientModule.

```js
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
  ],
```
A própria aplicação inserirá automaticamente o comando de importação abaixo. Caso contrário, podemos inseri-lo manualmente.

```js
 import { HttpClientModule} from '@angular/common/http';
```
Para configurarmos a listagem vamos voltar ao arquivo pensamento.service.ts. Dentro do método listar vamos inserir o comando return com o método get. Adicionaremos também a tipagem Pensamento[] que possui um arranjo de pensamentos.

```js
  listar() {
        return this.http.get<Pensamento[]>(this.API)
    }
```

Em seguida vamos importar a interface automaticamente para o service, clicando na caixa com a mensagem "Add import from "./pensamento"" que aparece junto ao código Pensamento[].

Com este processo feito, temos um método dentro do service que solicitará ao HTTP a lista de pensamentos que se encontra na API e que vai recebê-la na forma de um arranjo de pensamentos.

Vamos acessar o arquivo listar-pensamento.component.ts e configurá-lo para consumir o serviço. Liberaremos o acesso aos métodos declarados no service injetando-o dentro do construtor na seção export.

```js
export class ListarPensamentoComponent implements OnInit {

    listaPensamentos: Pensamento[] = [];

    constructor(private service: PensamentoService) { }
```
O comando de importação abaixo aparecerá automaticamente. Caso contrário, podemos inseri-lo manualmente.

```js
import { PensamentoService } from './../pensamento.service';
```
Agora o componente de listagem possui acesso a todos os métodos do serviço.

Vamos inserir o método listar() que configuramos anteriormente dentro da seção ngOnInit() que se encontra abaixo do export. Essa seção faz parte da configuração do ciclo de vida do componente, portanto, nós vamos inserir dentro dela qualquer comando que queremos executar junto ao carregamento do componente.

```js
    ngOnInit(): void {
        this.service.listar()
    }
```
Após o "Enter", a aplicação será executada.

É importante que o back-end esteja sendo executado ao mesmo tempo em outro terminal.

Ao acessar o navegador, percebemos que o comando novo não está funcionando. O mural ainda exibe a mensagem "Ainda não há pensamentos cadastrados!".

Voltando ao VS Code, acessaremos o arquivo pensamento.service.ts e posicionaremos o cursor em cima do método listar(). Será possível visualizar uma mensagem do sistema informando que o método listar() deve retornar um Observable.

## Observables

O Observable funciona de forma similar ao promise do Javascript, mas com a vantagem de possuir uma transferência de dados contínua. Ou seja, o Observable é capaz de emitir dados várias vezes durante a sua existência. Este comando faz parte da biblioteca RXJS, que é utilizada de forma camuflada pelo Angular e já vem instalada na aplicação.

Descobriremos o funcionamento do Observable para listar os pensamentos na tela do nosso mural. Primeiro, vamos acessar o arquivo pensamento.service.ts e inserir o Observable de Pensamento no método listar().

```js
    listar(): Observable<Pensamento[]> {
        // Trecho de código omitido
    }
```

Mantendo o cursor parado em cima de Observable aparecerá uma caixa acima do comando. Clicaremos em "Quick Fix... > Add import from "rxjs"". Desta maneira, importaremos este comando da biblioteca RXJS e o comando abaixo aparecerá automaticamente junto aos outros imports.

```js
 import { Observable } from 'rxjs';
```
Em seguida, acessaremos o arquivo listar-pensamento.component.ts e informaremos através do comando subscribe o nosso interesse nas informações da API que o serviço armazena. É como se estivéssemos acompanhando um canal no Youtube — se não realizarmos a inscrição no canal, não receberemos notificações de novos conteúdos lançados.

O método subscribe sinaliza ao Observable que é necessário emitir notificações sempre que houver um mudança. Dentro dele inserimos a lista que queremos receber da API.

```js
  ngOnInit(): void {
        this.service.listar().subscribe((listaPensamentos))
    }
```
Em seguida vamos inserir a função do tipo arrow function para permitir que a lista do serviço receba a lista do Observable.

Dica: A arrow function também é conhecida como "função de seta" por conta de sua sintaxe que lembra uma flecha: =>.

```js
     ngOnInit(): void {
        this.service.listar().subscribe((listaPensamentos) => {
            this.listapensamentos = listapensamentos
        });
    }
```

Voltaremos ao navegador e finalmente será possível visualizar a lista de pensamentos no mural. Finalizamos o método de listagem.

Acessaremos novamente o VS Code e configuraremos o cadastro. Dentro do arquivo pensamento.service.ts, abaixo do método de listagem, digitaremos o método criar() e dentro dele vamos inserir a variável pensamento do tipo Pensamento, que também retornará um Observable de Pensamento, mas dessa vez o retorno não será um arranjo.

```js
    criar(pensamento: Pensamento): Observable<Pensamento> {
    }
```

Dentro de criar(), vamos inserir um return com o método post, a URL da API e também o pensamento que iremos cadastrar.

```js
     criar(pensamento: Pensamento): Observable<Pensamento> {
        return this.http.post<Pensamento>(this.API, pensamento)
    }
```

  Acessaremos o arquivo criar-pensamento.component.ts para consumir o serviço. Dentro do constructor, injetaremos o serviço private service do tipo PensamentoService, que será importado automaticamente no componente. Em seguida, iremos até o método criarPensamento(), apagaremos o alert que criamos anteriormente e em seu lugar adicionaremos o serviço.

```js
     criarPensamento() {
        this.service.criar(this.pensamento).subscribe()
    }
```
    
 Acessaremos a classe pensamento e apagaremos os conteúdos de conteudo, autoria e modelo, já que a partir de agora eles serão gerados pelo método criar(). Apagaremos também a variável id por completo, o que gerará um erro que vamos corrigir em outro arquivo.

```js
     pensamento: Pensamento = {
        conteudo: '',
        autoria: '',
        modelo: ''
    }
```

  Para corrigir o erro de id, acessaremos o arquivo da interface pensamento.ts e alteraremos a variável id inserindo um ponto de interrogação (?). Assim, o id se torna uma variável opcional.

```js
    export interface Pensamento {
    id?: number
    conteudo: string
    autoria: string
    modelo: string
}
```

Vamos testar? Acessaremos a página do navegador, clicaremos no botão "Adicionar pensamento" e cadastraremos um novo pensamento com o conteúdo, autoria e modelo abaixo, e depois clicaremos em salvar:

Conteúdo: Pensamento de teste
Autoria ou fonte: Dev Angular
Selecione o modelo do cartão: Modelo 3
Vamos conferir se deu certo voltando ao VS Code. Através do explorador, abriremos o arquivo db.json dentro da pasta backend. Abaixo dos pensamentos que cadastramos anteriormente de forma manual, podemos ver o pensamento que inserimos pela página do navegador.

```js
        {
            "conteudo": "Pensamento de teste",
            "autoria": "Dev Angular",
            "modelo": "modelo3",
            "id": 4
        }
```

Nós queremos que, ao salvar ou cancelar, haja um redirecionamento para a página do mural. Para isso, vamos utilizar uma funcionalidade de rotas chamada router. Dentro do constructor de criar-pensamento.component.ts, vamos inserir esse serviço.


```js
      constructor(
        private service: PensamentoService,
        private router: Router
    ) { }
```
Dentro de criarPensamento vamos inserir uma arrow function (=>) que retorna o router com o método navigate. Este por sua vez receberá o caminho para onde queremos que a página seja redirecionada. Note que a rota fornecida estará dentro de um Event Binding.

```js
    criarPensamento() {
        this.service.criar(this.pensamento).subscribe(() => {
            this.router.navigate(['/listarPensamento'])
        )}
```
Faremos o mesmo processo para o botão de cancelar. Primeiro, acessaremos o arquivo criar-pensamento.component.html e deletaremos o routerLink que configuramos anteriormente dentro do button, para centralizar os redirecionamentos no arquivo TS. Abaixo podemos ver como ficou o código após a retirada desse comando.

```js
       <div class="acoes">
            //Trecho de código omitido
            <button (click)="cancelar()" class="botao">Cancelar</button>
        </div>
```

Voltando ao arquivo criar-pensamento.component.ts, vamos inserir a mesma função de criarPensamento() dentro de cancelar()

```js
          cancelar() {
        this.router.navigate(['/listarPensamento'])
    }
```

  Após esse procedimento, se criarmos um pensamento de teste e pressionarmos "Salvar" ou "Cancelar", ocorrerá o redirecionamento para a página do mural.



## Autor, Gilberto Gonçalves de Lima

- [@github](https://github.com/gilbertogoncalvesdelima/Mural-Dos-Pensamentos-Crud-Angular)
- [@linkedin](https://www.linkedin.com/in/gilberto--gon%C3%A7alves/)


