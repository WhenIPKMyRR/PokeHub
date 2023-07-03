import { useMutation, useQueryClient } from "react-query";
import { PokeHubApi } from "../../utils/api";


export const useUpdatePokemonData = () => {
    const queryClient = useQueryClient();
  
    return useMutation(async (pokemonId?: number, pokemonData?: any) => {
      try {
        await PokeHubApi.put(`pokemons/${pokemonId}`, pokemonData);
        queryClient.invalidateQueries(['pokemons', pokemonId]);
        console.log("Pokémon atualizado com sucesso!");
      } catch (error: any) {
        console.log("Erro ao atualizar o Pokémon:", error.message);
        throw error;
      }
    });
  };