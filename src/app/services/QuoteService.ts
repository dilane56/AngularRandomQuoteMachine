import {data} from '../models/data';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  getRandomQuote() {
     // renvoie un nombre aléatoire compris entre 0 et la taille du tableau de data
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex]; // retourne l’objet de data situer à l’index randomIndex
  }

}
