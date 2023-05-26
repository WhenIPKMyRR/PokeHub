import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getFavoritePokemonByUser  = async (userId: number) => {
    try {
        const favoritePokemon = await prisma.favoritePokemon.findMany({
            where: {
                userId:userId
            },
        })
        return favoritePokemon
    } catch (error) {
        console.error("Erro ao buscar os pokemons favoritos ", error);
        throw error;
    }
}