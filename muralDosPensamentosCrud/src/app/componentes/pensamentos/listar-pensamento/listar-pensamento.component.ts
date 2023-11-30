import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

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

  // Agora temos acesso a todos os metodos deste service
  constructor(private service: PensamentoService) { }

// Assim que mneu componente renderizar a primeira vez, atualize o service.listar
  ngOnInit(): void {
    // Com este subscribe, o observable irá entender que pe necessario emitir notificações, toda vez que tiver uma mudança
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
    this.listaPensamentos = listaPensamentos
    })
  }
  carrregarMaisPensamentos() {
    // ++ serve para passar para a proxima pagina
    this.service.listar(++this.paginaAtual)
    .subscribe(listarPensamento => {
      // ... foi utilizado o spread operator, pois eu quero que esta lista seja acrecida, os pensamentos que ja existe e mais os 6 que foram renderizados a cada página
      this.listaPensamentos.push(...listarPensamento)
      // Se não houverem mais pensamentos, que a propriedade haMaisPensamentos, recebe o valor de false
      if(this.listaPensamentos.length) {
        this.haMaisPensamentos = false
      }
    } )
  }
}
