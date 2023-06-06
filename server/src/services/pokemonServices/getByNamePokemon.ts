import { PrismaClient, Pokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getByNamePokemon(namePokemon: string): Promise<Pokemon | null> {
  try {
    const pokemon = await prisma.pokemon.findFirst({
      where: {
        name: {
          equals: namePokemon.toLowerCase()
        }
      },
      include: {
        types: true,
        observations: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                avatar: true
              }
            }
          }
        },
        user: true
      }
    });

    return pokemon;
  } catch (error) {
    console.error("Erro na busca do pokemon", error);
    throw error;
  }
}
