import { PrismaClient, ObservationPokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllObservation(): Promise<ObservationPokemon[]>{
    try {
        const observations = await prisma.observationPokemon.findMany();
        return observations
    } catch (error) {
        console.error("Erro na busca das observações", error);
        throw error;
    }
}