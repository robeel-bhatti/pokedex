import { Injectable, inject } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
import { PokemonSearchResponse } from '../model/pokemon-search';
import {Pokemon} from '../model/pokemon';

const DEFAULT_LIMIT = 10;
const DEFAULT_OFFSET = 0;

@Injectable({ providedIn: 'root'})
export class PokemonClient {
  readonly #http = inject(HttpClient);
  readonly #searchUrl = `${environment.basePokeApiUrl}/pokemon`;

  getPokemonList(limit: number = DEFAULT_LIMIT, offset: number = DEFAULT_OFFSET): Observable<PokemonSearchResponse> {
    let params = new HttpParams()
      .set('limit', limit.toString())
      .set('offset', offset.toString());
    return this.#http.get<PokemonSearchResponse>(this.#searchUrl, {params});
  }

  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.#http.get<Pokemon>(url);
  }
}
