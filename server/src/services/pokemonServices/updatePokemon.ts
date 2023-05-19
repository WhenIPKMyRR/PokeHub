import { pokemonSchema } from "../../schemas/Pokemon/pokemonSchema";
import { PrismaClient, Pokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function updatePokemon(id: number, pokemonData: Pokemon) {
  try {
    const validatedPokemon = pokemonSchema.parse(pokemonData);

    const updatePokemon =  await prisma.pokemon.update({
        where: {
            id: id
        },
        data: {
            name: validatedPokemon.name,
            type: validatedPokemon.type,
            masterId: validatedPokemon.masterId,
        }
    })

    return updatePokemon;
  } catch (error) {
    console.error("Erro na atualização das informações do pokemon", error);
    throw error;
  }
}
