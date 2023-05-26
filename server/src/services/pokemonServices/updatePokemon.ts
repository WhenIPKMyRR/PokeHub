import { pokemonSchema } from "../../schemas/Pokemon/pokemonSchema";
import { PrismaClient, Pokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function updatePokemon(pokemonId: number, pokemonData: Pokemon) {
  try {
    const validatedPokemon = pokemonSchema.parse(pokemonData);

    const updatePokemon =  await prisma.pokemon.update({
        where: {
            id: pokemonId
        },
        data: {
            name: validatedPokemon.name,
            type: validatedPokemon.type,
            image: validatedPokemon.image,
            description: validatedPokemon.description,
            height: validatedPokemon.height,
            weight: validatedPokemon.weight,
            baseExperience: validatedPokemon.baseExperience,
            userId: validatedPokemon.userId
        }
    })

    return updatePokemon;
  } catch (error) {
    console.error("Erro na atualização das informações do pokemon", error);
    throw error;
  }
}
