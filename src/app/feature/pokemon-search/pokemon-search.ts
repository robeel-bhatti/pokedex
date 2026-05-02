import {Component, inject, OnInit, signal} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {Pokemon, PokemonSearchResponse} from '../../core/model/pokemon';
import {PokemonClient} from '../../core/service/pokemon-client';

@Component({
  selector: 'app-pokemon-search.ts',
  imports: [MatCardModule],
  templateUrl: './pokemon-search.html',
  styleUrl: './pokemon-search.css',
})
export class PokemonSearch implements OnInit {

  readonly #pokemonClient = inject(PokemonClient);

  pokemonSignal= signal<PokemonSearchResponse | undefined>(undefined);

  ngOnInit(): void {
    this.#pokemonClient.getPokemonList().subscribe(pokemon => this.pokemonSignal.set(pokemon));
  }
}
