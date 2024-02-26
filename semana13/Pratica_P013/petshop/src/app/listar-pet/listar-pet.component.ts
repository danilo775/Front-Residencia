import { Component } from '@angular/core';
import { Ticket } from '../ticket.model';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-listar-pet',
  templateUrl: './listar-pet.component.html',
  styleUrl: './listar-pet.component.scss'
})
export class ListarPetComponent {
  loadedTickets:Ticket[] = [];
  constructor(private bancoService:DataBaseService) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.bancoService.getTickets().subscribe(responseData => {
      console.log(responseData);
      this.loadedTickets = responseData;
      console.log(this.loadedTickets);
    });
  }
  apagarTudo(){
    this.bancoService.apagarTodosTickets().subscribe( () => {
      console.log('Apagou tudo');
      this.loadedTickets = [];
    });
  }
}
