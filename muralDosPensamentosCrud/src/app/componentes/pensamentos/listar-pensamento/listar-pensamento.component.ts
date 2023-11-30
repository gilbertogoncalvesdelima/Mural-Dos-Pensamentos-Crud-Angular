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

  // Agora temos acesso a todos os metodos deste service
  constructor(private service: PensamentoService) { }

// Assim que mneu componente renderizar a primeira vez, atualize o service.listar
  ngOnInit(): void {
    // Com este subscribe, o observable irá entender que pe necessario emitir notificações, toda vez que tiver uma mudança
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
    this.listaPensamentos = listaPensamentos
    })
  }
}
