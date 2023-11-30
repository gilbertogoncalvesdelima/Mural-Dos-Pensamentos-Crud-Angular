import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import {  Router, ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  // FormGrupo, ele serve para construção de formulários, que o angular nos fornece
  formulario!: FormGroup;

  constructor(

  private service: PensamentoService,

  private router: Router,

  private route: ActivatedRoute,

  // FormBuilder, ele é outra class de serviço, responsável pela construção do formulário
  private formBuilder: FormBuilder
    ) { }

  // NgOnInit, Para que serve: Ele é chamado uma única vez após a inicialização do componente.
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],


      // Validators.required, preenchimento obrigatorio
      conteudo:[pensamento.conteudo, Validators.compose([
        Validators.required,
        // Expressão regular que não permiti que coloque apenas espaços vazios,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],



      autoria: [pensamento.autoria, Validators.compose([
        Validators.required,
        // Quantidade minima de caracteres
        Validators.minLength(3)
      ])],
      modelo: [pensamento.modelo]
    })
  })
}
  // Quando eu criar um novo pensamento será cadastradas as informações os valores constantes no formulário
  editarPensamento() {
   // console.log(this.formulario.get('autoria')?.errors)
    // Si o formulario for valido, eu quero que o formulario seja criado
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

  // Quando o botão não estiver preenchido o botão, salvar está desabilitado e cinza, se eu digitar angular coisa no pensamento e mais de 2 caracteres na Autoria o botão é habilitado e muda a cor para azul
  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    }
    else return "botao__desabilitado"
  }
}
