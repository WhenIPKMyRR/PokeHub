import { pokemonSchema } from "../../schemas/Pokemon/pokemonSchema";
import { PrismaClient, Pokemon } from "@prisma/client";
import { IPokemonPokeHub } from "./createPokemon";

const prisma = new PrismaClient();

export async function updatePokemon(pokemonId: number, pokemonData: Pokemon) {
  try {

    const updatedPokemon =  await prisma.pokemon.update({
        where: {
            id: pokemonId
        },
        data: {
          isFavorite: pokemonData.isFavorite,
  
        }
    })

    return updatedPokemon;
  } catch (error) {
    console.error("Erro na atualização das informações do pokemon", error);
    throw error;
  }
}
