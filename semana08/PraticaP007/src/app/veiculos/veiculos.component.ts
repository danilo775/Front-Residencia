import { Component, Input } from '@angular/core';
import { JsonReaderService } from '../services/json-reader.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css'],
})
export class VeiculosComponent {
  @Input() categoria: string;
  veiculos: any[];

  constructor(private jsonReaderService: JsonReaderService) {}

  ngOnChanges(): void {
    if (this.categoria) {
      this.jsonReaderService.getJsonData().subscribe((data) => {
        this.veiculos = data[this.categoria];
      });
    }
  }
}
