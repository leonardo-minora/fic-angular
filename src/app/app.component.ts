import { Component } from '@angular/core';

import { FalhaComponent } from './falha/falha.component';
import { SucessoComponent } from './sucesso/sucesso.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minora Angular App';
}
