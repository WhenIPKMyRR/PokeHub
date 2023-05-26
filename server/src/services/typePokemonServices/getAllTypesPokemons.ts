import { PrismaClient, TypePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllTypesPokemons(): Promise<TypePokemon[]>{
    try {
        const typesPokemons = await prisma.typePokemon.findMany();

        return typesPokemons
    } catch (error) {
        console.error("Erro na busca dos tipos de pokemons", error);
        throw error;
    }
}