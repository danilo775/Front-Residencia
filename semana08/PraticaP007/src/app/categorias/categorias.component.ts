import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../services/json-reader.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  categorias: string[] = [];

  constructor(private jsonReaderService: JsonReaderService) {}

  ngOnInit(): void {
    this.jsonReaderService.getJsonData().subscribe((data) => {
      this.categorias = Object.keys(data);
    });
  }
}
