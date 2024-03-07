import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-suino-form',
  templateUrl: './suino-form.component.html',
  styleUrl: './suino-form.component.scss'
})
export class SuinoFormComponent {
  suinoForm!: FormGroup;

  constructor(private formConstrutor: FormBuilder, private servico: BancoService) { }

  ngOnInit() {
    this. suinoForm = this.formConstrutor.group({
      brincoAnimal: ['', Validators.required],
      brincoPai: ['', Validators.required],
      brincoMae: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  adicionarSuino(): void {
    console.log(this.suinoForm.value);
    this.servico.adicionarSuino(this.suinoForm.value);
    this.suinoForm.reset();
  }
}
