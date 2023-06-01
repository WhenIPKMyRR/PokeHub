import { useQueryClient, useQuery } from "react-query";
import { useParams } from "react-router";
import { IPokemonData } from "../interfaces/IPokemonData";
import { PokeHubApi } from "./api";


export const useCurrentPokemonData = () => {
  const queryClient = useQueryClient();
  const params = useParams();
  const currentPokemon = params["*"] as string;

  const { data: pokemon, isLoading: isLoadingPokemon } = useQuery<
  
    IPokemonData,Error>(

    ["pokemons", currentPokemon],
    async () => {
      const response = await PokeHubApi.get(`pokemons/${currentPokemon}`);
      return response.data?.data;
    },
    {
      initialData: () => {
        return queryClient
          .getQueryData<IPokemonData[]>("pokemons")
          ?.find((pokemon) => pokemon.id === Number(currentPokemon));
      },
    }
  );

  return { pokemon, isLoadingPokemon } ;
  
};