import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscaFeriadoComponent } from './pages/busca-feriado/busca-feriado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BuscaFeriadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mfe-busca-feriados';
}
