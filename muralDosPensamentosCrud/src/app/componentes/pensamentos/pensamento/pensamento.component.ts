import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
// Componente Filho
export class PensamentoComponent implements OnInit {

  // Criamos um atributos, chamado pensamento, que sera um objeto com um conteudo
  // Foi utilizado o decorator, @Input, no html foi feito um property binding, da propriedade pensamento, no html do listar pensamentos e ira receber informações do componente Pai
  @Input() pensamento = {
  conteudo: "I love Angular",
  autoria: 'Gilberto',
  modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
