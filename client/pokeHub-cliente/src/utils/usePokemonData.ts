import { useQuery } from "react-query";
import axios from "axios";
import { IPokemonData } from "../interfaces/IPokemonData";

const API_URL = "http://localhost:3003/pokemon/all";

export const usePokemonData = () => {
    const { data: pokemons, isLoading: isLoadingPokemons } = useQuery<IPokemonData[]>("pokemons", async () => {
      const response = await axios.get(API_URL);

      return response.data?.data;
      
    }, {
      staleTime: 1000 * 60, // 1 minuto
    });
  
    return { pokemons, isLoadingPokemons };
};