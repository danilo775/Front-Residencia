import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peso } from '../model/peso.model';
import { exhaustMap, map, take } from 'rxjs';
import { AutenticaService } from './autentica.service';

@Injectable({
  providedIn: 'root'
})

export class PesoService {
  apiURL = 'https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient, private autenticaService: AutenticaService) { }

  adicionarPesoSuino(idSuino: string, pesoData: { peso: number, dataPeso: string }) {
    const url = `https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${idSuino}/pesos.json`;
    return this.http.post(url, pesoData).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  // adicionarPesoSuino(Suino: { 
  //                             idSuino: string;
  //                             peso: number;
  //                             dataPeso: string;
  //                             id?: string;
  //                     }
  //               ){
  //   return this.http.post(this.apiURL, Suino).subscribe(      // metodo post para adicionar dados criava uma nova tabela  sem o id
  //     (response) => {
  //       console.log(response);
  //     }
  //   );
  //   }

    getSuino() {
        return this.http.get<{[key:string]: Peso}>('https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json').pipe(
          map( (responseData) => {
            const listaArray:Peso[] = [];
            for (const key in responseData) {
                if ((responseData).hasOwnProperty(key)){
                  listaArray.push({...(responseData as any)[key], id: key});
                }
            }
            return listaArray;
          }
          ),
        );
    }

    getSuin(id: string) {
      return this.http.get<Peso>(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`);
    }
    
  
    

      editarPeso(id:string, SuinoData: {   
                                          peso: number;
                                          dataPeso: string;
                                          id?: string;
                                          }
      ) {
      return this.http.put(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`, SuinoData, {observe: 'response'});
    }

    getSuino2() {
      return this.http.get('https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    );
    }
}
