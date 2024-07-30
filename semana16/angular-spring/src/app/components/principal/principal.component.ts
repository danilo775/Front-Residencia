// import { ClienteService } from './../../service/cliente.service';
import { Cliente } from './../../model/cliente';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, BrowserModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
  btnCadastro: boolean = true;

  // Cliente: Cliente[] = [];

  // constructor(private servico: ClienteService) { }

  // ngOnInit(): void {
  //   this.selecionar();
  // }

  // selecionar():void{
  //   this.servico.selecionar()
  //   .subscribe(
  //     resposta => this.Cliente = resposta
  //   );
  // }
}
