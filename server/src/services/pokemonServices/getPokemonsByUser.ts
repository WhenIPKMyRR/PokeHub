import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getPokemonsByUser  = async (userId: number) => {
    try {
        const pokemons = await prisma.pokemon.findMany({
            where: {
                userId: Number(userId)
            }
        })
        return pokemons
    } catch (error) {
        console.error("Erro ao buscar os pokemons do usuário ", error);
        throw error;
    }
}