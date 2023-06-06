import { PrismaClient, Pokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function deletePokemon(id: number) {
  try {

    const deletedPokemon = await prisma.pokemon.delete({
        where: {
          id: id
        },
        include: {
          types: true, 
          observations: true
        },
    });

    return deletedPokemon;
  }catch (error) {
    console.error("Erro ao deletar pokemon", error);
    throw error;
  }
}
