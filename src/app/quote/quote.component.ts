import {Component, EventEmitter, Output} from '@angular/core';
import {QuoteService} from '../services/QuoteService';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-quote',
  imports: [
    NgStyle
  ],
  templateUrl: './quote.component.html',
  standalone: true,
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
 // on declare un variable pour stocker nos quotes
  quote: any;
  color : string ="";
  textColor: string = this.getRandomColor();

  @Output() colorChange = new EventEmitter<string>();

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    // On initialise notre composant avec la fonction changeQuote pour pouvoir
    // avoir au chargement de la page les données deja présentes (quote et couleur)
    this.changeQuote();
  }
  changeQuote() {
    this.quote = this.quoteService.getRandomQuote();
    this.textColor = this.getRandomColor();
    this.color = this.textColor;
    this.colorChange.emit(this.color);
   // Émettre la couleur
  }
  // Fonction permettant de générer une couleur de facon aléatoire
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // retourne un lien vers twitter ainsi que les data de la quote actuelle générée par la fonction getRandomQuote
  getTweetLink() {
    return `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.quote.quote}&author=${this.quote.author}`;
  }
  // retourne le lien tumblr perméttant de tweeter la quote générer par getRandomQuote
  getTumblrLink() {
    return `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${this.quote.quote}&author=${this.quote.author}`;
  }



}
