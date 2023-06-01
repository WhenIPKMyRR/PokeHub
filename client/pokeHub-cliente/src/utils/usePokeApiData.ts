import { useQuery, useQueryClient } from "react-query";
import { PokeApi, PokeHubApi } from "../services/api";
import axios from "axios";
import { useParams } from "react-router";

export interface IPokemonToCaught {
  name: string;
  url: string;
}

export interface IPokemonData {
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

const fetchPokemons = async (url: string): Promise<any> => {
  const response = await PokeApi.get(url);
  return response.data;
};

export const useAllPokemons = () => {
  const getPokemons = async (url: string): Promise<IPokemonToCaught[]> => {
    const data = await fetchPokemons(url);
    const { results, next }: { results: IPokemonToCaught[], next: string | null } = data;

    if (next) {
      const nextPageData = await getPokemons(next);
      return [...results, ...nextPageData];
    }

    return results;
  };

  return useQuery<IPokemonToCaught[], Error>('pokemons', () => getPokemons('https://pokeapi.co/api/v2/pokemon'), {
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const usePokemon = (pokemon: IPokemonToCaught) => {
  return useQuery<IPokemonData, Error>(pokemon.name, () =>
    fetchPokemons(pokemon.url)
  );
};

export const createPokemonByPokeApi = async (pokemonData: any) => {
  const response = await PokeHubApi.post('pokemons', pokemonData)
  return response.data
};

export const fetchPokemonDescription = async (currentPokemon: string) => {
  return new Promise<string>((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${currentPokemon}`)
      .then((response) => {
        const flavorTextEntries = response.data?.flavor_text_entries;
        const ptbrEntry = flavorTextEntries.find(
          (entry: any) => entry.language.name === "en"
        );

        if (ptbrEntry) {
          resolve(ptbrEntry.flavor_text);
        } else {
          reject(new Error("Descrição em pt-br não encontrada"));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const fetchPokemonColor = async (currentPokemon: string) => {
  return new Promise<string>((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${currentPokemon}`)
      .then((response) => {
        const color = response.data?.color
        resolve(color.name)
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const useCurrentPokemonDataPokeApi = () => {
  const queryClient = useQueryClient();
  const params = useParams();
  const currentPokemon = params["*"] as string;

  const { data: pokemonPokeApi, isLoading: isLoadingPokemon } = useQuery<IPokemonData, Error>(
    ["pokemonPokeApi", currentPokemon],
    async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);
      console.log(currentPokemon)
      return response.data;
    },
    {
      initialData: () => {
        return queryClient
          .getQueryData<IPokemonData[]>("pokemons")
          ?.find((pokemon) => pokemon.name === currentPokemon);
      },
    }
  );

  return { pokemonPokeApi, isLoadingPokemon };
};

