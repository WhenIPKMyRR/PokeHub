import { useQuery } from "react-query";
import axios from "axios";
import { IPokemonData } from "../interfaces/IPokemonData";
import { IFavoritePokemonData } from "../interfaces/IFavoritePokemonData";

const API_URL = "http://localhost:3003/users/1/favorites";

export const useFavoritePokemonData = () => {
    const { data: favoritesPokemons, isLoading: isLoadingFavorites } = useQuery<IFavoritePokemonData[]>("favorites", async () => {
      const response = await axios.get(API_URL);

      const favoritesPokemons: IFavoritePokemonData[] = response.data?.data;

      const favoritePokemonByUser = await Promise.all(
        favoritesPokemons.map(async (favorite) => {
          const userResponse = await axios.get(`http://localhost:3003/pokemons/${favorite.userId}`);
          const userData = userResponse.data?.data;
  
          return { ...favorite, userData };
        })
      );


      return favoritePokemonByUser
      
    }, {
      staleTime: 1000 * 60, // 1 minuto
    });
  
    return { favoritesPokemons, isLoadingFavorites };
};