import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
// Crie um serviço que retorne um observable que emita números de 1 a 100
export class GeraNumerosService {
  subject = new Subject<number>();
  constructor() {
    setInterval(() => {
      this.subject.next(Math.random());
    }, 1000);
   }  
}