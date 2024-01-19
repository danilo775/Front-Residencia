import { Component } from '@angular/core';
import { PipeTestePipe } from './pipe-teste.pipe'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'minhaApp';
  corPai: string = 'red';  // definiu red no appPai para aparece no filho //// Variavel CorPai

  teste = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise resolved!'), 2000);
  });

}
