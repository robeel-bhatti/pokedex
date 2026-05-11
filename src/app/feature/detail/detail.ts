import {Component, input } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PokemonSearchResponseDetails } from '../../core/model/api/pokemon-search-response';
import {toPokemon} from '../../core/mapper/pokemon-mapper';
import {Pokemon} from '../../core/model/domain/pokemon';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class PokemonDetail {

  readonly id = input.required<number, string>({ transform: val => Number(val)});
  readonly #pokemon = httpResource<Pokemon>(() =>
    {
      return { url: `${environment.baseApiUrl}/pokemon/${this.id()}` }
    },
    {
      parse: raw => toPokemon(raw as PokemonSearchResponseDetails)
    }
  );

  readonly pokemonData = this.#pokemon.value;
  readonly isLoading = this.#pokemon.isLoading;
  readonly isError = this.#pokemon.error;
}
