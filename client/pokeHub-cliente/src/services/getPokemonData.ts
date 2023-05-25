import { useQueryClient, useQuery } from "react-query";
import { useParams } from "react-router";
import { IPokemonData } from "../interfaces/IPokemonData";
import axios from "axios";

const API_URL = "http://localhost:3003/pokemon/";

export const PokemonToGetData = () => {

    const queryClient = useQueryClient();
    const params = useParams()
    const currentPokemon = params['*'] as string

    const { data: dataPokemon, isLoading: isLoadingPokemon } = useQuery<IPokemonData, Error>(
        ["pokemon", currentPokemon],
        async () => {
            const response = await axios.get(`${API_URL}${currentPokemon}`);
            return response.data?.data;
        },
        {
            initialData: () => {
                return queryClient
                    .getQueryData<IPokemonData[]>("pokemons")
                    ?.find((pokemon) => pokemon.id === Number(currentPokemon));
            },
        }
    );
    return {dataPokemon, isLoadingPokemon}
}


  
  