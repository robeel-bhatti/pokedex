import { Injectable, inject } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {PokemonSearchResponse} from '../model/api/pokemon-search-response';

const DEFAULT_LIMIT = 151;
const DEFAULT_OFFSET = 0;

@Injectable({ providedIn: 'root'})
export class PokemonClient {
  readonly #http = inject(HttpClient);
  readonly #searchUrl = `${environment.baseApiUrl}/pokemon`;

  getPokemonList(limit: number = DEFAULT_LIMIT, offset: number = DEFAULT_OFFSET): Observable<PokemonSearchResponse> {
    let params = new HttpParams()
      .set('_per_page', limit.toString())
      .set('_page', offset.toString());

    return this.#http.get<PokemonSearchResponse>(this.#searchUrl, { params });
  }
}
