import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  // Criamos um atributos, chamado pensamento, que sera um objeto com um conteudo
  pensamento = {
  conteudo: "I love Angular",
  autoria: 'Gilberto',
  modelo: 'modelo3'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
