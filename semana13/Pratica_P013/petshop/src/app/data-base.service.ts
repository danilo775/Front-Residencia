import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Ticket } from './ticket.model';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService implements OnInit {

  loadedTickets: Ticket[] = [];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {

  } 

  addTicket(ticketData: {  NomePassageiro: string, 
                                numeroVoo: string, 
                                dataPartida: string, 
                                dataChegada: string, 
                                aeroportoPartida: string, 
                                aeroportoChegada: string }) {

    this.http.post(
      'https://petshop-b760a-default-rtdb.firebaseio.com/posts.json',
      
       ticketData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  getTickets() {
    return this.http.get< {[key:string]: Ticket}>('https://petshop-b760a-default-rtdb.firebaseio.com/posts.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    )
    .pipe(
      map( (responseData) => {
        const postArray:Ticket[] = [];
        for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)){
              postArray.push({...(responseData as any)[key], id: key});
            }
        }
        return postArray;
      }
      )
    );
  }
  
}
