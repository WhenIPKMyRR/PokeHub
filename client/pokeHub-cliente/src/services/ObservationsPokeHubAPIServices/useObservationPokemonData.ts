import { useQuery } from "react-query";
import { IObservationPokemonData } from "../../interfaces/IObservationPokemonData";
import { PokeHubApi } from "../../utils/api";
import { useParams } from "react-router";

export const useObservationData = () => {
  const params = useParams();
  const currentPokemon = params["*"] as string;

  return useQuery<IObservationPokemonData[]>("observations", async () => {
    try {
      const response = await PokeHubApi.get(`pokemons/${currentPokemon}/observations`);
      const observations: IObservationPokemonData[] = response.data?.data;

      const observationsWithUser = await Promise.all(
        observations.map(async (observation) => {
          try {
            const userResponse = await PokeHubApi.get(`users/${observation.userId}`);
            const userData = userResponse.data?.data;

            return { ...observation, userName: userData.name };
          } catch (error) {
            console.error("Erro ao obter dados do usuário:", error);
            throw error;
          }
        })
      );

      return observationsWithUser;
    } catch (error) {
      console.error("Erro ao obter dados de observação:", error);
      throw error;
    }
  }, {
    staleTime: 1000 * 60, // 1 minuto
  });
};
