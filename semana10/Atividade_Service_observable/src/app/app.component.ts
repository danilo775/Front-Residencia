import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import {GeraNumerosService} from './gera-numeros.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Atividade_Service_observable';
  numero = 0;
  valor: Subscription | undefined;

  constructor(private geraNumerosService: GeraNumerosService){
    
  }
  // GeraNumerosService() {
  //   this.valor = this.geraNumerosService.subject.subscribe(numero => {
  //     this.numero = numero;
  //   });
  // }
}
