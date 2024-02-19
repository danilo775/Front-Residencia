import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 // tipo='simples';
 //prices='100,00/mes';
 plano = {
  tipo : 'simples',
  prices: '100,00/mes',
 };

}
