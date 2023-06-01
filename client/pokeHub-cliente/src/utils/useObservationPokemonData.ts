import { useQuery } from "react-query";
import { IObservationPokemonData } from "../interfaces/IObservationPokemonData";
import { PokeHubApi } from "../services/api";
import { useMutation, useQueryClient } from "react-query";

import { useParams } from "react-router";

export const useObservationData = () => {

  const params = useParams();
  const currentPokemon = params["*"] as string;

  const { data: observationsPokemon, isLoading: isLoadingComments } = useQuery<IObservationPokemonData[]>("observations", async () => {
    const response = await PokeHubApi.get(`pokemons/${currentPokemon}/observations`);
    const observationData: IObservationPokemonData[] = response.data?.data;


    const observationsWithUser = await Promise.all(
      observationData.map(async (observation) => {
        const userResponse = await PokeHubApi.get(`users/${observation.userId}`);
        const userData = userResponse.data?.data;

        return { ...observation, userName: userData.name };
      })
    );

    return observationsWithUser;
  }, {
    staleTime: 1000 * 60, // 1 minuto
  });

  return { observationsPokemon, isLoadingComments };
};


export const createObservation = async (observationData: IObservationPokemonData) => {
  try {
    const response = await PokeHubApi.post(`observations`, observationData);
    return response.data;
  } catch (error) {
    console.error("Erro na criação da observação:", error);
    throw new Error("Erro ao criar a observação de Pokémon.");
  }
};
