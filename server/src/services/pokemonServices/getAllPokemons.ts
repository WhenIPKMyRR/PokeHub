import { PrismaClient, Pokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllPokemons(): Promise<Pokemon[]>{
    try {
        const pokemons = await prisma.pokemon.findMany();

        return pokemons
    } catch (error) {
        console.error("Erro na busca dos pokemons", error);
        throw error;
    }
}