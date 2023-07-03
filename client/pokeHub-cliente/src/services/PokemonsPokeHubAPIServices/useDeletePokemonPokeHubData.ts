import { useMutation } from "react-query";
import { PokeHubApi } from "../../utils/api";


export const useDeleteCurrentPokemonData = () => {
  
    return useMutation(async (pokemonId?: number) => {
      try {
        await PokeHubApi.delete(`pokemons/${pokemonId}`);
      } catch (error: any) {
        console.log("Erro ao deletar o Pokémon:", error.message);
        throw error;
      }
    });
};