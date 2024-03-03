import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  formContato: FormGroup;
  constructor(private formBuilder: FormBuilder, private bancoService:DataBaseService) {
    this.formContato = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  } 
  onSubmit() {
    console.log(this.formContato.value);
    this.bancoService.addMensagem(this.formContato.value);
    this.formContato.reset();
  }

}
