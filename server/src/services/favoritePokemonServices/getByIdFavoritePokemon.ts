import { PrismaClient, FavoritePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getByIdFavoritePokemon(id: number): Promise<FavoritePokemon | null>{
    try {

        const favoritePokemon = await prisma.favoritePokemon.findUnique({
          where: {
            id,
          },
        });
    
        return favoritePokemon
    } catch (error) {
        console.error("Erro na busca do pokemon favorito", error);
        throw error;
    }
}