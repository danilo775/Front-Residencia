import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  email= 'emaail@formulario.com';

  onClick(){
    console.log(this.email);

  }
}
