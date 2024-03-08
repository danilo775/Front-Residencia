import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peso } from '../model/peso.model';
import { map } from 'rxjs/operators';
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

  getPeso() {
    return this.http.get<{[key:string]: Peso}>('https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json').pipe(
      map(responseData => {
        const listaArray: Peso[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            listaArray.push({ ...(responseData as any)[key], id: key });
          }
        }
        console.log(listaArray);
        return listaArray;
      })
    );
  }

  getSuin(id: string) {
    return this.http.get<Peso>(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`);
  }

  // Método para obter os pesos de um suíno específico
  getPesosSuino(id: string) {
    return this.http.get<Peso[]>(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}/pesos.json`);
  }

  editarPeso(id: string, PesoData: { peso: string; dataPeso: string; id?: string; }) {
    // Recupera os dados do suíno para incluir na requisição PUT
    return this.getSuin(id).pipe(
        map(suinoData => {
            // Combina os dados do suíno com os dados do peso
            const newData = { ...suinoData, ...PesoData };
            // Executa a requisição PUT com os dados combinados
            return this.http.put(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`, newData, { observe: 'response' });
        })
    );
}


  
  
  

  getSuino2() {
    return this.http.get('https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json', {
      params: new HttpParams().set('print', 'pretty')
    });
  }

  deletarPeso(id: string) {
    return this.http.delete(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`);
  }
}
