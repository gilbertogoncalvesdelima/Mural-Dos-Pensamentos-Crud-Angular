import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {


  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }
  // FormGrupo, ele serve para construção de formulários, que o angular nos fornece
  formulario!: FormGroup;

  constructor(private service: PensamentoService,
  private router: Router,
  // FormBuilder, ele é outra class de serviço, responsável pela construção do formulário
  private formBuilder: FormBuilder
    ) { }

  // NgOnInit, Para que serve: Ele é chamado uma única vez após a inicialização do componente.
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo:['Formulario reativo'],
      autoria: [''],
      modelo: ['modelo1']
    })
  }
  criarPensamento() {
  this.service.criar(this.pensamento).subscribe(() => {
    this.router.navigate(['/listarPensamento'])
  })
  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
