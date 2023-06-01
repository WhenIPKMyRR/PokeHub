import { pokemonSchema } from "../../schemas/Pokemon/pokemonSchema";
import { PrismaClient, Pokemon } from "@prisma/client";
import { IPokemonPokeApi } from "./createPokemon";

const prisma = new PrismaClient();

export async function updatePokemon(pokemonId: number, pokemonData: IPokemonPokeApi) {
  try {

    const updatePokemon =  await prisma.pokemon.update({
        where: {
            id: pokemonId
        },
        data: {
          name: pokemonData.name,
          image: pokemonData.image,
          weight: pokemonData.weight,
          height: pokemonData.height,
          userId: pokemonData.userId,
          baseExperience: pokemonData.baseExperience,
          description: pokemonData.description,
          types: {
            create: {
              name: pokemonData.types.name,
            }
          },
          isFavorite: pokemonData.isFavorite,
  
        }
    })

    return updatePokemon;
  } catch (error) {
    console.error("Erro na atualização das informações do pokemon", error);
    throw error;
  }
}
