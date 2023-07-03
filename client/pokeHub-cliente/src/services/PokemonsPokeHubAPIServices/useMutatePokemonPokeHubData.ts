import { useMutation } from 'react-query';
import { PokeHubApi } from '../../utils/api';
import { IPokemonPokeHubToCreateData } from '../../interfaces/IPokeHub';

export const useMutatePokemonPokeHubData = () => {
  const createPokemonMutation = useMutation((pokemonData: IPokemonPokeHubToCreateData) =>
    PokeHubApi.post('pokemon', pokemonData)
  );

  const createPokemon = async (pokemonData: IPokemonPokeHubToCreateData) => {
    try {
      await createPokemonMutation.mutateAsync(pokemonData);
      console.log('Novo Pokémon criado');
    } catch (error) {
      console.log('Erro ao criar o Pokémon:', error);
    }
  };

  return { createPokemon, isLoading: createPokemonMutation.isLoading };
};
