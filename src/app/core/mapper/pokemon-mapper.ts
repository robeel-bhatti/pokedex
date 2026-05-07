import { Pokemon } from '../model/domain/pokemon';
import { PokemonSearchResponseDetails} from '../model/api/pokemon-search-response';

/**
 * Maps a {@link PokemonSearchResponseDetails} API object to a {@link Pokemon} domain object.
 */
export function toPokemon(res: PokemonSearchResponseDetails): Pokemon {
  return {
    pokedexNum: res.id,
    name: res.name,
    types: {
      primary: res.types[0].type.name,
      secondary: res.types[1]?.type.name,
    },
    primaryImage: res.sprites.other.home.front_default,
  }
}
