/**
 * Represents the API response from PokeAPI that returns
 * a list of pagination Pokémon results.
 */
export interface PokemonSearchResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[]
}
