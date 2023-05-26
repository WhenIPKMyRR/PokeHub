import { PrismaClient, ObservationPokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getByIdObservation(id: number): Promise<ObservationPokemon | null>{
    try {

        const observation = await prisma.observationPokemon.findUnique({
          where: {
            id,
          },
        });
    
        return observation
    } catch (error) {
        console.error("Erro na busca da observação", error);
        throw error;
    }
}