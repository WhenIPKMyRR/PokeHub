import { PrismaClient, TypePokemon } from "@prisma/client";
import { typePokemonSchema } from "../../schemas/TypePokemon/typePokemonSchema";

const prisma = new PrismaClient();

export async function createTypePokemon(typePokemonData: TypePokemon) {
    try {
        const createdTypePokemon = await prisma.typePokemon.create({
            data: {
                name: typePokemonData.name
            },
        });

        return createdTypePokemon;
    } catch (error) {
        console.error("Erro na criação to tipo do pokemon ", error);
        throw error;
    }
}

