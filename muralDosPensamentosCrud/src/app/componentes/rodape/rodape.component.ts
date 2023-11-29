import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  // Declaração da variável dataHoraAtual
  dataHoraAtual: Date;


  constructor() {
  // Inicialização da variável dataHoraAtual com a data e hora atuais
  this.dataHoraAtual = new Date();
  }

  ngOnInit(): void {
  }

}
