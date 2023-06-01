import { PrismaClient, Pokemon, TypePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export interface IPokemonPokeHub{
  name: string;
  image: string;
  weight: number;
  height: number;
  userId: number;
  baseExperience: number;
  description: string;
  isFavorite: boolean;
  color: string;
  types: TypePokemon[];
}

export async function createPokemon(pokemonData: IPokemonPokeHub) {
  try {
    const createdPokemon = await prisma.pokemon.create({
      data: {
        name: pokemonData.name,
        image: pokemonData.image,
        weight: pokemonData.weight,
        height: pokemonData.height,
        userId: pokemonData.userId,
        baseExperience: pokemonData.baseExperience,
        description: pokemonData.description,
        isFavorite: pokemonData.isFavorite,
        color: pokemonData.color,
        types: {
          create: pokemonData.types.map((type) => ({
            name: type.name,
          })),
        },
      }
    });

    return createdPokemon;
  } catch (error) {
    console.error("Erro na criação do pokemon", error);
    throw error;
  }
}


