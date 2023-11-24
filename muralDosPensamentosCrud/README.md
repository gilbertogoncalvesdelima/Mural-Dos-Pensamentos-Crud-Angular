# Mural-de-Lembretes-Crud-Angular 👋

## Sobre o projeto:

Moral de pensamentos, você poderá colocar sitação de livros, trechos de musicas e aquelas frases legais para colocar como legenda.

## Regras de negócios: 

Ao clicar no botão editar pensamento, ai você irá para segunda tela, que será a pagina de cadastro, aonde irá conter, um imput, para escrever um novo pensamento, e outro imput, que no caso, será o nome da autoria ou fonte, também irá conter o modelo das aspas coloridas, para determinar, que cada cor será um tema diferente, depois de salvo o pensamento irá aparecer no mural, o que foi escrito e também poderá, editar ou excluir, do mural caso você tiver interesse.

## Projeto, Angular, apresentação

O projeto será desenvolvido em Angular CLI, com ela, será criado o projeto e terá diversos tipos de arquivos e serviços e também conterá um componente para cada aplicação, vamos criar um componente para o card, nosso formulario será outro componente e o mural de pensamentos será outro componente, assim ficando organizado toda a estrutura do projeto, também vamos entender como acontece o fluxo de informações dentro do componente, vamos utilizar rotas, para adiconar navegação dinamica, entre as telas, exemplo: ao clicar no botão adiconar pensamento será direcionado para o formulário, também vamos utilizar as principais diretivas do angular, para renderizar as diretivas do card vamos utilizar a diretiva ngFor e também conterá os services e como utulizar a injeção de dependências e também vamos utilizar requisições http, através do Http Client, para poder utilizar os metodos, get, post, put e delete e fazer todas estas funcionalidades, vamos utilizar o typescript, para fazer a tipagem.

## Figma, layout

[Figma](https://www.figma.com/proto/V7AgehdRqeyJaizG6O3Slo/Mural-de-Lembretes-Crud---Gilberto-Gon%C3%A7alves-de-Lima?type=design&node-id=148-27&t=7nfsjqeqlX4eOUXA-0&scaling=min-zoom&page-id=148%3A26&starting-point-node-id=148%3A67)

## Preparação do ambiente

Ambiente de desenvolvimento
Neste curso, vamos conhecer vários recursos do Angular CLI, uma interface de linha de comando usada para facilitar a construção de aplicações, desde a criação de um projeto, estrutura base, criação de componentes, de serviços e com o build da aplicação.

Para instalar o Angular CLI (versão do curso 14.0) é necessário ter o NodeJS (versão do curso 16.14.2) na última versão recomendada instalado e usaremos o VSCode como editor de código.

Recomendamos fortemente que você use as mesmas versões utilizadas no curso para obter melhor aproveitamento e evitar erros por incompatibilidade.

Para instalar o Angular CLI, abra seu terminal e utilize o seguinte comando:

```js
npm install -g @angular/cli@14.0.0
```
Após instalarmos a ferramenta vamos usá-la para criar o projeto, em seguida vá até o diretório que deseja construir sua aplicação e execute o comando a seguir:

```js
ng new muralDosPensamentosCrud
```

Durante a instalação, será necessário responder duas perguntas. A primeira será se deseja criar um arquivo responsável pelo gerenciamento das rotas, vamos responder sim, e a segunda será sobre qual estilo deseja usar no projeto, escolha o CSS.

Lembrando que após criado o projeto, sua dependencias já foram instaladas, ficara tudo na pasta node_modules, caso for clonar este projeto depois, você deve, fazer o npm install, para que todas as dependencias do projeto seja instaladas novamente, pois quando salvamos os codigos no github, algumas coisas são ignoradas, para evitar ter acumulos de codigos, no arquivo .gitgnore, você pode determinar quais arquivos vâ para o github, assim ficando muito mais leve, quando clonamos o projetos outra vez e assim fazer o npm install que ele já irá instalar as dependencias outra vez.

Com o projeto criado, vamos ver como é a cara inicial deste projeto? Para isso, vamos usar o comando cd muralDosPensamentosCrud para entrar no diretório do projeto e com a ajuda do CLI, usar o comando ng serve para executar o projeto.

Tudo ocorreu bem? Sim? Abra seu navegador e acesse o [LocalHost](http://localhost:4200)

