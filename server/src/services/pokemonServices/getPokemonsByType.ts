import { PrismaClient, Pokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPokemonsByType(type: string): Promise<Pokemon[]> {
  try {
    const pokemons = await prisma.pokemon.findMany({
      where: {
        types: {
          some: {
            name: type,
          },
        },
      },
    });

    return pokemons;
  } catch (error) {
    console.error("Erro ao buscar os Pokémons por tipo", error);
    throw error;
  }
}
