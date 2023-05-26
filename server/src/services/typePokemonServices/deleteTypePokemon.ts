import { PrismaClient, TypePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteTypePokemon(id: number) {
  try {
    const deletedTypePokemon = await prisma.typePokemon.delete({
        where: {
            id: id
        }
    });

    return deletedTypePokemon;
  }catch (error) {
    console.error("Erro ao deletar tipo de pokemon", error);
    throw error;
  }
}
