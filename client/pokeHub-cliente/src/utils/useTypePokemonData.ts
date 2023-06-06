import { useQuery } from "react-query";
import { IPokemonPokeHubData } from "../interfaces/IPokemonData";
import { PokeHubApi } from "../services/api";
import { ITypePokemon } from "../interfaces/ITypePokemon";
import { useParams } from "react-router";


export const useTypePokemonData = () => {
    
  const { data: typePokemonData, isLoading: isLoadingType, isError: isErrorType } = useQuery<IPokemonPokeHubData[], Error>(

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

export const getTypeByPokemonData = (currentPokemon?: string) =>{


    const { data: typeByPokemonData, isLoading: isLoadingByType, isError: isErrorByType } = useQuery<ITypePokemon[], Error>(
    
      ["types", currentPokemon], 
      async () => {
        const response = await PokeHubApi.get(`/pokemons/${currentPokemon}/types`);
        return response.data?.data;
      },
      {
        staleTime: 0,
        refetchOnWindowFocus: false,
      }
  );
    
  return { typeByPokemonData, isLoadingByType, isErrorByType }
}

// export const getTypeByPokemonData2 = (pokemon: string) =>{

//   const { data: typeByPokemonData, isLoading: isLoadingByType, isError: isErrorByType } = useQuery<
//   ITypePokemon[],
//   Error
// >(
//   ["types", pokemon],
//   async () => {
//     const response = await PokeHubApi.get(`/pokemons/${pokemon}/types`);
//     return response.data?.data;
//   },
//   {
//     staleTime: 1000 * 60 * 5, // 5 minutos
//     refetchOnWindowFocus: false,
//   }
// );
  
// return { typeByPokemonData, isLoadingByType, isErrorByType }
// }