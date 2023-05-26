import { PrismaClient, TypePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTypesPokemonsByPokemon(pokemonId: number): Promise<TypePokemon[]> {
  try {
    const typesPokemons = await prisma.typePokemon.findMany({
      where: {
        pokemons: {
          some: {
            id: pokemonId,
          },
        },
      },
    });

    return typesPokemons;
  } catch (error) {
    console.error("Erro ao buscar os tipos de pokemon", error);
    throw error;
  }
}
