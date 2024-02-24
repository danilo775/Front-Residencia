import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nome='felipe';
  
  onChange(text:string){
    console.log(text);
  }
  onClick(){
    console.log('texto: '+this.nome);
  }
}
