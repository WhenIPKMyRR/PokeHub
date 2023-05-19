import { PrismaClient, Observation } from "@prisma/client";

const prisma = new PrismaClient();

export async function getByIdObservation(id: number): Promise<Observation | null>{
    try {

        const observation = await prisma.observation.findUnique({
          where: {
            id,
          },
        });
    
        return observation
    } catch (error) {
        console.error("Erro na busca do comentário", error);
        throw error;
    }
}