import { PrismaClient, TypePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getByIdTypePokemon(id: number): Promise<TypePokemon | null>{
    try {
        const typePokemon = await prisma.typePokemon.findUnique({
          where: {
            id,
          },
        });
    
        return typePokemon
    } catch (error) {
        console.error("Erro na busca do tipo", error);
        throw error;
    }
}