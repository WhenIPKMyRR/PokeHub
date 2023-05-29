import { useQuery } from "react-query";
import { IObservationPokemonData } from "../interfaces/IObservationPokemonData";
import axios from "axios";

const API_URL = "http://localhost:3003/observations";

export const useObservationData = () => {
  const { data: observationsPokemon, isLoading: isLoadingComments } = useQuery<IObservationPokemonData[]>("observations", async () => {
    const response = await axios.get(API_URL);
    const observationData: IObservationPokemonData[] = response.data?.data;


    const observationsWithUser = await Promise.all(
      observationData.map(async (observation) => {
        const userResponse = await axios.get(`http://localhost:3003/users/${observation.userId}`);
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
