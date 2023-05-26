import { PrismaClient, FavoritePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteFavoritePokemon(id: number) {
  try {
    const deletedFavoritePokemon = await prisma.favoritePokemon.delete({
        where: {
            id: id
        }
    });

    return deletedFavoritePokemon;
  }catch (error) {
    console.error("Erro ao retirar o pokemon da lista de favoritos", error);
    throw error;
  }
}
