import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
//Componente Pai
export class ListarPensamentoComponent implements OnInit {

 //Criado um atributo chamado listaPensamentos
  listaPensamentos = [
    // Teste Lista
  {
    conteudo: "Passo informação para o componente filho",
    autoria: "Componente pai",
    modelo: "modelo3"
  },
  {
    conteudo: "Minha propriedade é decorada com @Input()",
    autoria: "Componente Filho",
    modelo: "modelo2"
  },
  {
    conteudo: "Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa  ",
    autoria: " ",
    modelo: "modelo1"
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
