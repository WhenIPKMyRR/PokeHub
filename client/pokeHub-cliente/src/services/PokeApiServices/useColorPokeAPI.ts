import { useQuery, useMutation } from "react-query";
import { PokeApi } from "../../utils/api";

export const usePokemonColorPokeAPI = (currentPokemon: string) => {
  return useQuery<string, Error>(["pokemonColor"], async () => {
    const response = await PokeApi.get(`pokemon-species/${currentPokemon}`);
    const color = response.data?.color;
    return color.name;
  });
};
