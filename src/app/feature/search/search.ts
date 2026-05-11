import {Component, computed, inject} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {environment} from '../../../environments/environment';
import {httpResource} from '@angular/common/http';
import {Pokemon} from '../../core/model/domain/pokemon';
import {PokemonSearchResponse} from '../../core/model/api/pokemon-search-response';
import {toPokemon} from '../../core/mapper/pokemon-mapper';

@Component({
  selector: 'app-pokemon-search',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class PokemonSearch {
  static readonly DEFAULT_LIMIT = 151;
  static readonly DEFAULT_PAGE = 1;

  readonly #pokemonList = httpResource<Pokemon[]>(() =>
    ({
      url: `${environment.baseApiUrl}/pokemon`,
      params: { _per_page: PokemonSearch.DEFAULT_LIMIT, _page: PokemonSearch.DEFAULT_PAGE },
    }),
    {
      parse: raw => (raw as PokemonSearchResponse).data.map(toPokemon),
      defaultValue: [],
    }
  );

  protected readonly filteredList = computed(() => {
    return this.#pokemonList.value().filter(p =>
      p.name.toLowerCase().includes(this.query().toLowerCase())
    );
  });

  protected readonly searchControl = new FormControl('', { nonNullable: true });

  protected readonly query = toSignal(
    this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged()),
    { initialValue: '' }
  );

  protected readonly isLoading = this.#pokemonList.isLoading;
  protected readonly isError = this.#pokemonList.error;
}
