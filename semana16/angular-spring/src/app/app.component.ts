import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrincipalComponent, CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-spring';
}
