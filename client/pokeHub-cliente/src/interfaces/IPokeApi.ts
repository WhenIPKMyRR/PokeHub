export interface IPokemonPokeAPiData {
    id: number;
    name: string;
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      }
    };
    types: {
      type: {
        name: string;
      };
    }[];
    weight: number;
    height: number;
    color?: string;
    userId?: number;
    base_experience: number;
    description?: number;
  }