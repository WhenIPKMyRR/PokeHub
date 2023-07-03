import { useQuery } from "react-query";
import { IPokemonPokeHubData } from "../../interfaces/IPokeHub";
import { PokeHubApi } from "../../utils/api";
import { ITypePokemon } from "../../interfaces/ITypePokemon";

export const useTypePokemonData = () => {
  return useQuery<IPokemonPokeHubData[], Error>("types", async () => {
    const response = await PokeHubApi.get(`types`);
    return response.data?.data;
  }, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useTypeByPokemonData = (currentPokemon?: string) => {
  return useQuery<ITypePokemon[], Error>(["types", currentPokemon], async () => {
    if (!currentPokemon) {
      throw new Error("Sem pokemon para a busca de tipo");
    }

    const response = await PokeHubApi.get(`/pokemons/${currentPokemon}/types`);
    return response.data?.data;
  }, {
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
