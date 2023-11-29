import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    // Fazer o direcionamento
    private router: Router,
    // Informação naquele momento especifico rota
    private route: ActivatedRoute


    ) { }


  ngOnInit(): void {
    // snapshot faz uma captura de imagem
    // paramMap, ela nos tras informações como se fosse um map, obrigatorios e opcionais, daquele pensamento
    const id = this.route.snapshot.paramMap.get('id')
    // O nome parseInt vem da ideia de "inteiro" (integer) e "analisar" (parse), indicando que a função está analisando uma string para extrair um valor inteiro dela.
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    }
    )
  }
  // Excluir Pensamento
  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }
  // Cancelar pensamentos
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
