import { useQueryClient, useQuery, QueryClient } from "react-query";
import { useParams } from "react-router";
import { IPokemonPokeHubData } from "../interfaces/IPokemonData";
import { PokeHubApi } from "./api";
import { queryClient } from "./queryClient";


export const useCurrentPokemonData = (currentPokemon: string) => {

  const { data: pokemon, isLoading: isLoadingPokemon } = useQuery<
  IPokemonPokeHubData,
    Error
  >(
    ['pokemons', currentPokemon],
    async () => {
      const response = await PokeHubApi.get(`pokemons/${currentPokemon}`);
      return response.data?.data;
    },
  );

  return { pokemon, isLoadingPokemon };
};

export const updateCurrentPokemon = async (id?: number, data?: any) => {
  try {
    await PokeHubApi.put(`pokemons/${id}`, data);
    queryClient?.invalidateQueries(['pokemons', id]);
    console.log("Pokémon atualizado com sucesso!");
  } catch (error) {
    console.log("Erro ao atualizar o Pokémon:", error);
  }
  
};


export const deleteCurrentPokemon = async (id?: number) =>{

  try {
    await PokeHubApi.delete(`pokemons/${id}`);
  } catch (error) {
    console.log("Erro ao deletar o Pokémon:", error);
  }

}