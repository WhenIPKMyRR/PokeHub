import { PrismaClient, Pokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getByIdPokemon(id: number): Promise<Pokemon | null>{
    try {
        const pokemon = await prisma.pokemon.findUnique({
          where: {
            id: id,
          },
        });
    
        return pokemon
    } catch (error) {
        console.error("Erro na busca do pokemon", error);
        throw error;
    }
}