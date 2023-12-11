import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
    nome: string = 'arara';
    imagem: string  ='data:imagem/png;base64,arara';
    descricao: string = 'A arara-canide do matagal';
     link: string = 'https://pt.wikipedia.org/wiki/Arara_cenide';
    url2: string = 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/06/yusuke-urameshi-live-action-yu-yu-hakusho.jpg';
    nome2: string = 'tamandua';
    public getToString(): string {
      return this.nome + ' ' + this.descricao;
    }

    public onClick(): void {
      alert('Clicou em mim');
    }
}
