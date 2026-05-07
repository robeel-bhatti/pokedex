export interface PokemonSearchResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: PokemonSearchResponseDetails[],
}

export interface PokemonSearchResponseDetails {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
  sprites: {
    other: {
      home: {
        front_default: string;
      }
    }
  }
}
