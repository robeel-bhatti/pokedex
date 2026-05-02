/**
 * Represents a pokemon item returned from the
 * PokeAPI's /pokemon endpoint
 */
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  moves: Move[];
  sprites: Sprite;
  cries: Cry;
  species: Species;
  stats: Stat[];
  types: PokemonType[];
}

export interface Ability {
  is_hidden: boolean;
  ability: Metadata;
}

export interface Move {
  move: Metadata;
}

export interface Sprite {
  other: {
    home: {
      front_default: string;
    };
  }
}

export interface Cry {
  latest: string;
}

export interface Species extends Metadata {}

export interface Stat {
  base_stat: number;
  stat: Metadata;
}

export interface PokemonType {
  type: Metadata;
}

export interface Metadata {
  name: string;
  url: string;
}



