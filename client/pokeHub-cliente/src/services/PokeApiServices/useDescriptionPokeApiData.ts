import { useQuery } from "react-query";
import { PokeApi } from "../../utils/api";

export const usePokemonDescriptionPokeAPI = (currentPokemon: string) => {
  return useQuery<string, Error>(["pokemonDescription", currentPokemon], async () => {
    const response = await PokeApi.get(`pokemon-species/${currentPokemon}`);
    const flavorTextEntries = response.data?.flavor_text_entries;
    const enEntry = flavorTextEntries.find(
      (entry: any) => entry.language.name === "en"
    );

    if (enEntry) {
      return enEntry.flavor_text;
    } else {
      throw new Error("Descrição em pt-br não encontrada");
    }
  });
};

