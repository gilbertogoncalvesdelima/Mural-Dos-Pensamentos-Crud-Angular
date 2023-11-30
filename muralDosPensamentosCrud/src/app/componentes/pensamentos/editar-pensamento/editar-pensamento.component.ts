import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }
   // Importado Pensamento Service, agora já posso consumir ele
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //snapshot, faz uma captura instantanea como se fosse uma fotografia na rota daquele momento que foi acessado
    //paramMap, esta propriedade paramMap, ela nos tras como se fosse um mapa as informações obrigatorios e opcionais daquele pensamento
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }
  // Botão, editarPensamento, quando for clicado será direcionado para listar pensamento
   editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })

  }
  // Botão, Cancelar, quando clicar será direcionado, para listarPensamento
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }


}
