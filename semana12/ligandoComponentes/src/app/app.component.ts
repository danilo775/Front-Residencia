import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SnakeComponent } from './snake/snake.component';
import { SpiderComponent } from './spider/spider.component';
import { PessoaComponent } from './pessoa/pessoa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SnakeComponent,SpiderComponent,PessoaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ligandoComponentes';
}
