import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { DataBaseService } from '../data-base.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit {
  petForm!: FormGroup;
  fOnFocus:Boolean = false;
  fonChange:Boolean = false;
  nomeDoPassageiro: string = '';
  tempNomePassageiro: string = '';

  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService) { }
  ngOnInit() {
    this.petForm = this.formConstrutor.group({
      NomeTutor: ['', Validators.required],
      nomePet: ['', Validators.required],
      idade: ['', Validators.required],
      raca: ['', Validators.required],
      historico: ['', Validators.required],
      peso: ['', Validators.required],
    });
    this.bancoService.getTickets();
  }

}
