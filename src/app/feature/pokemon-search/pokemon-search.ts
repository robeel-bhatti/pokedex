import {Component, computed, inject} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PokemonStore} from '../../core/store/pokemon.store';

@Component({
  selector: 'app-pokemon-search',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './pokemon-search.html',
  styleUrl: './pokemon-search.css',
})
export class PokemonSearch {
  readonly #pokemonStore = inject(PokemonStore);
  protected readonly isLoading = this.#pokemonStore.isLoading;
  protected readonly searchControl = new FormControl('', { nonNullable: true });

  readonly query = toSignal(
    this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged()),
    { initialValue: '' }
  );

  readonly filteredList = computed(() => {
    const q = this.query().toLowerCase();
    return this.#pokemonStore.pokemonList().filter(p => p.name.toLowerCase().includes(q));
  })
}
