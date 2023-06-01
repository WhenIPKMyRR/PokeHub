import { useQuery } from "react-query";
import { IPokemonData } from "../interfaces/IPokemonData";
import { PokeHubApi } from "../services/api";


export const usePokemonData = () => {
  const { data: pokemonsPokeHub, isLoading: isLoadingPokeHub, isError } = useQuery<IPokemonData[], Error>(

    ["pokemonsHub"], async () => {
        const response = await PokeHubApi.get(`pokemons`);
        return response.data?.data;
    },
    {
      staleTime:
        1000 * 60 * 5, // 5 minutos
        refetchOnWindowFocus: false,
    },
  );

  return { pokemonsPokeHub, isLoadingPokeHub, isError }

};