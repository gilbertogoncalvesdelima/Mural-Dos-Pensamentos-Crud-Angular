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
  listaPensamentos: Pensamento[]  = [
    // Teste Lista
  // {
  //   conteudo: "Passo informação para o componente filho",
  //   autoria: "Componente pai",
  //   modelo: "modelo3"
  // },
  // {
  //   conteudo: "Minha propriedade é decorada com @Input()",
  //   autoria: "Componente Filho",
  //   modelo: "modelo2"
  // },
  // {
  //   conteudo: "Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa Minha propriedade é decoraa  ",
  //   autoria: " ",
  //   modelo: "modelo1"
  // },
  ]

  // Agora temos acesso a todos os metodos deste service
  constructor(private service: PensamentoService) { }
// Assim que mneu componente renderizar a primeira vez, atualize o service.listar
  ngOnInit(): void {
    // Com este subscribe, o observable irá entender que pe necessario emitir notificações, toda vez que tiver uma mudança
    this.service.listar().subscribe((listaPensamentos) => {
    this.listaPensamentos = listaPensamentos
    })
  }
}
