import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculoValidators';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {

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
      // Validators.required, preenchimento obrigatorio
      conteudo:['', Validators.compose([
        Validators.required,
        // Expressão regular que não permiti que coloque apenas espaços vazios,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)

      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        // Quantidade minima de caracteres
        Validators.minLength(3),
        // Aceita apenas letras minusculas
        minusculoValidator
      ])],
      modelo: ['modelo1']
    })
  }
  // Quando eu criar um novo pensamento será cadastradas as informações os valores constantes no formulário
  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors)
    // Si o formulario for valido, eu quero que o formulario seja criado
  if(this.formulario.valid) {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
   }
  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
  // Quando o botão não estiver preenchido o botão, salvar está desabilitado e cinza, se eu digitar angular coisa no pensamento e mais de 2 caracteres na Autoria o botão é habilitado e muda a cor para azul
  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}
