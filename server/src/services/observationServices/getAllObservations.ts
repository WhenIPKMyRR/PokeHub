import { PrismaClient, Observation } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllObservation(): Promise<Observation[]>{
    try {
        const observations = await prisma.observation.findMany();
        return observations
    } catch (error) {
        console.error("Erro na busca dos comentários", error);
        throw error;
    }
}