import {Component, signal} from '@angular/core';
import { PokemonSearch } from './feature/pokemon-search/pokemon-search';

@Component({
  selector: 'app-root',
  imports: [PokemonSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokedex');
}
