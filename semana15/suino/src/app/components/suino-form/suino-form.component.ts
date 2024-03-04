import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-suino-form',
  templateUrl: './suino-form.component.html',
  styleUrl: './suino-form.component.scss'
})
export class SuinoFormComponent implements OnInit{

  suinoForm!: FormGroup;

  constructor(private suinoConstrutor: FormBuilder) { }

  ngOnInit() {
    this. suinoForm = this.suinoConstrutor.group({
      nome: ['', Validators.required],
      fabricante: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      preco: ['', Validators.required],
      garantia: ['', Validators.required],
      observacoes: ['', Validators.required],
    });
  }

  adicionarPeca(): void {
    console.log(this.suinoForm.value);
    //this.servico.adicionarPeca(this.suinoForm.value);
    this.suinoForm.reset();
  }


}
