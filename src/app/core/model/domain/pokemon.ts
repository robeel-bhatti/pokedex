/**
 * Represents a singular Pokemon domain model.
 */
export interface Pokemon {
  pokedexNum: number;
  name: string;
  types: {
    primary: string;
    secondary?: string;
  };
  primaryImage: string;
}



