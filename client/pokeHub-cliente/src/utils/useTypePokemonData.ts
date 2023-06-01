import { useQuery } from "react-query";
import { IPokemonData } from "../interfaces/IPokemonData";
import { PokeHubApi } from "../services/api";
import { ITypePokemon } from "../interfaces/ITypePokemon";


export const useTypePokemonData = () => {
    
  const { data: typePokemonData, isLoading: isLoadingType, isError: isErrorType } = useQuery<IPokemonData[], Error>(

    ["types"], async () => {
        const response = await PokeHubApi.get(`types`);
        return response.data?.data;
    },
    {
      staleTime:
        1000 * 60 * 5, // 5 minutos
        refetchOnWindowFocus: false,
    },
  );

  return { typePokemonData, isLoadingType, isErrorType } 

};

export const getTypeByPokemonData = (namePokemon: string | undefined) =>{
    const { data: typeByPokemonData, isLoading: isLoadingByType, isError: isErrorByType } = useQuery<ITypePokemon[], Error>(
    
        ["types"], async () => {
            const response = await PokeHubApi.get(`/pokemons/${namePokemon}/types`);
            return response.data?.data;
        },
        {
        staleTime:
            1000 * 60 * 5, // 5 minutos
            refetchOnWindowFocus: false,
        },
    );
    
    return { typeByPokemonData, isLoadingByType, isErrorByType }
}