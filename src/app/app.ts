import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonSearch } from './feature/pokemon-search/pokemon-search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokedex');
}
