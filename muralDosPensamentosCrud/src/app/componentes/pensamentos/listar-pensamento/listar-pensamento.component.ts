import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
//Componente Pai
export class ListarPensamentoComponent implements OnInit {

 //Criado um atributo chamado listaPensamentos
  listaPensamentos: Pensamento[]  = []
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = ''
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu Mural'

  // Agora temos acesso a todos os metodos deste service
  constructor(private service: PensamentoService,

  //Router é um servico, que fornece manipulação de recursos de url e tatmbém navegação entre view's
  private router: Router
    ) { }

// Assim que mneu componente renderizar a primeira vez, atualize o service.listar
  ngOnInit(): void {
    // Com este subscribe, o observable irá entender que pe necessario emitir notificações, toda vez que tiver uma mudança
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
    this.listaPensamentos = listaPensamentos
    })
  }
  carrregarMaisPensamentos() {
    // ++ serve para passar para a proxima pagina
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listarPensamento => {
      // ... foi utilizado o spread operator, pois eu quero que esta lista seja acrecida, os pensamentos que ja existe e mais os 6 que foram renderizados a cada página
      this.listaPensamentos.push(...listarPensamento)
      // Se não houverem mais pensamentos, que a propriedade haMaisPensamentos, recebe o valor de false
      if(this.listaPensamentos.length) {
        this.haMaisPensamentos = false
      }
    } )
  }
  pesquisarPensamentos() {

    // Sempre sera renderizado o botão, por isso está true
    this.haMaisPensamentos = true

    // Sempre que a pessoa pesquise, seja a primeira pagina daqueles pensamentos, reinicializa com 1
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
     .subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
     })
  }

  recarregarComponente() {

    this.favoritos = false;
    this.paginaAtual = 1;

    // Estrategia quando estiver utilizando rotas
    // Eu deveria utizar esta rota, quando utilizamos sholdReuseRoute
    this.router.routeReuseStrategy.shouldReuseRoute = () => false

    // location.reload() atualizar toda a página
    // onSameUrlNavigation, esta propriedade diz que quando tiver navegando na mesma url, precisamos dizer para o angular o que quer, que aconteça
    //ignore, o servidor ira ignorar a solicitação
    // reload, recarregamento da url
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])

  }

  listarFavoritos() {
    this.titulo = "Meus Favoritos"
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
     .subscribe(listaPensamentosFavoritos => {
      this.listaPensamentos = listaPensamentosFavoritos
      this.listaFavoritos = listaPensamentosFavoritos
    })
  }
}
