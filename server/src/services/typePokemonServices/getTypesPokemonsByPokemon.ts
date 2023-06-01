import { PrismaClient, TypePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTypesPokemonsByPokemon(namePokemon: string): Promise<TypePokemon[]> {
  try {
    const typesPokemons = await prisma.typePokemon.findMany({
      where: {
        pokemons: {
          some: {
            name: namePokemon,
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
