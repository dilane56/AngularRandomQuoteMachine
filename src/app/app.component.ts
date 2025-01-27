import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import {QuoteComponent} from './quote/quote.component';
import {NgStyle} from '@angular/common';
import {QuoteService} from './services/QuoteService';


@Component({
  selector: 'app-root',
  imports: [QuoteComponent, NgStyle],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RandomQuoeMachine';
  backgroundColor: string | undefined ; // Couleur de fond par défaut
  
  onColorChange(newColor: string) {
    this.backgroundColor = newColor; // Mettre à jour la couleur de fond
  }


}
