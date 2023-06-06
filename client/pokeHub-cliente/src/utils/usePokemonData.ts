import { useQuery } from "react-query";
import { IPokemonPokeHubData } from "../interfaces/IPokemonData";
import { PokeHubApi } from "../services/api";


export const usePokemonData = () => {
  const { data: pokemonsPokeHub, isLoading: isLoadingPokeHub, isError } = useQuery<IPokemonPokeHubData[], Error>(

    ["pokemonsHub"], async () => {
        const response = await PokeHubApi.get(`pokemons`);
        return response.data?.data;
    },
    {
      staleTime: 0,
        refetchOnWindowFocus: true,
    },
  );

  return { pokemonsPokeHub, isLoadingPokeHub, isError }

};

export const usePokemonDataByType = (currentPokemon: string) => {
  const { data: pokemonsPokeHub, isLoading: isLoadingPokeHub, isError } = useQuery<IPokemonPokeHubData[], Error>(

    ["pokemonsByType", currentPokemon], async () => {
        const response = await PokeHubApi.get(`/types/${currentPokemon}/pokemons`);
        return response.data?.data;
    },
    {
      staleTime:
        1000 * 60 * 5, // 5 minutos
        refetchOnWindowFocus: false,
    },
  );

  return { pokemonsPokeHub, isLoadingPokeHub, isError }

}

