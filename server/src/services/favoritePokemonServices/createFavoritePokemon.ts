import { FavoritePokemon, PrismaClient } from "@prisma/client";
import { favoritePokemonSchema } from "../../schemas/FavoritePokemon/favoritePokemonSchema";

const prisma = new PrismaClient();

export async function createFavoritePokemon(favoritePokemonData: FavoritePokemon ) {
    try {
        const validateFavorite = favoritePokemonSchema.parse(favoritePokemonData);
    
        const createdFavoritePokemon = await prisma.favoritePokemon.create({
        data: {
            userId: validateFavorite.userId,
            pokemonId: validateFavorite.pokemonId,
        },
        });
    
        return createdFavoritePokemon;
    }catch (error) {
        console.error("Erro em adicionar o pokemon ", error);
        throw error;
    }
}