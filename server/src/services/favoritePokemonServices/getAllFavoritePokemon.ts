import { PrismaClient, FavoritePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllFavoritePokemon(): Promise<FavoritePokemon[]>{
    try {
        const favoritesPokemons = await prisma.favoritePokemon.findMany();
        return favoritesPokemons
    } catch (error) {
        console.error("Erro na busca dos pokemons favoritos", error);
        throw error;
    }
}