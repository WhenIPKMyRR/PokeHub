import { pokemonSchema } from "../../schemas/Pokemon/pokemonSchema";
import { PrismaClient, Pokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function createPokemon(pokemonData: Pokemon) {
  try {
    const validatedPokemon = pokemonSchema.parse(pokemonData);

    const createdPokemon = await prisma.pokemon.create({

      data: {
        name: validatedPokemon.name,
        type: validatedPokemon.type,
        image: validatedPokemon.image,
        description: validatedPokemon.description,
        height: validatedPokemon.height,
        weight: validatedPokemon.weight,
        baseExperience: validatedPokemon.baseExperience,
        userId: validatedPokemon.userId,
      },
      
    });

    return createdPokemon;
  }catch (error) {
    console.error("Erro na criação do pokemon", error);
    throw error;
  }
}

