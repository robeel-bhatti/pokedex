import {Injectable} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {Pokemon} from '../model/domain/pokemon';
import {environment} from '../../../environments/environment';
import {PokemonSearchResponse} from '../model/api/pokemon-search-response';
import {toPokemon} from '../mapper/pokemon-mapper';

@Injectable({ providedIn: 'root' })
export class PokemonStore {
  static readonly DEFAULT_LIMIT = 151;
  static readonly DEFAULT_PAGE = 1;
  static readonly BASE_URL = environment.baseApiUrl;

  readonly #sourceList = httpResource<Pokemon[]>(() =>
    ({
      url: `${PokemonStore.BASE_URL}/pokemon`,
      params: { _per_page: PokemonStore.DEFAULT_LIMIT, _page: PokemonStore.DEFAULT_PAGE },
    }),
    {
      parse: raw => (raw as PokemonSearchResponse).data.map(toPokemon),
      defaultValue: [],
    }
  );

  readonly pokemonList = this.#sourceList.value;
  readonly isLoading = this.#sourceList.isLoading;
}
