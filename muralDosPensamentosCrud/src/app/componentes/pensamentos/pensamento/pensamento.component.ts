import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
// Componente Filho
export class PensamentoComponent implements OnInit {

  // Criamos um atributos, chamado pensamento, que sera um objeto com um conteudo
  // Foi utilizado o decorator, @Input, no html foi feito um property binding, da propriedade pensamento, no html do listar pensamentos e ira receber informações do componente Pai
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Gilberto',
    modelo: 'modelo3',
    favorito: false
  }
  // Importamos o service, para conseguimos utilizar os metodos
  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }
  // Se for o caracter maior que 256, return a class do css especifica
  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false) {
      return 'inativo'
    }
    return 'ativo'
  }
  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe
    console.log(this.pensamento.favorito)
  }

}
