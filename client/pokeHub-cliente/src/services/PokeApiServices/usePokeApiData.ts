import { useQuery } from "react-query";
import axios from "axios";
import { PokeApi } from "../../utils/api";
import { IPokemonPokeAPiData } from "../../interfaces/IPokeApi";

const fetchPokemons = async (url: string): Promise<any> => {
  const response = await axios.get(url);
  return response.data;
};

export const usePokemonPokeApiData = () => {
  const getPokemons = async (url: string): Promise<IPokemonPokeAPiData[]> => {
    const data = await fetchPokemons(url);
    const { results, next }: { results: IPokemonPokeAPiData[], next: string | null } = data;

    if (next) {
      const nextPageData = await getPokemons(next);
      return [...results, ...nextPageData];
    }

    return results;
  };

  return useQuery<IPokemonPokeAPiData[], Error>(
    "pokemons",
    () => getPokemons("https://pokeapi.co/api/v2/pokemon"),
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    }
  );
};

export const useCurrentPokemonPokeApiData = (currentPokemon: string) => {
  const { data: pokemonPokeAPIData, isLoading: isLoadingPokemon, isError: isErrorPokemon } = useQuery<IPokemonPokeAPiData, Error>(
    ["pokemonByParam", currentPokemon],
    async () => {
      const response = await PokeApi.get(`pokemons/${currentPokemon}`);
      return response.data;
    }
  );

  return { pokemonPokeAPIData, isLoadingPokemon, isErrorPokemon };
};
