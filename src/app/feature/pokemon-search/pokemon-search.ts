import {Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import {PokemonClient} from '../../core/service/pokemon-client';
import {PokemonSearchResponse} from '../../core/model/api/pokemon-search-response';
import { Pokemon } from '../../core/model/domain/pokemon';
import {Observable, switchMap, forkJoin, map} from 'rxjs';
import {toPokemon} from '../../core/mapper/pokemon-mapper';

@Component({
  selector: 'app-pokemon-search',
  imports: [MatCardModule],
  templateUrl: './pokemon-search.html',
  styleUrl: './pokemon-search.css',
})
export class PokemonSearch {
  readonly #pokemonClient = inject(PokemonClient);
  readonly pokemonList = toSignal(this.searchPokemon());

  private searchPokemon() {
    return this.#pokemonClient.getPokemonList().pipe(map(x => x.data.map(toPokemon)));
  }
}
