import { PrismaClient, Observation } from "@prisma/client";
import { observationsSchemas } from "../../schemas/Observations/observationSchema";

const prisma = new PrismaClient();

export async function createObservation(observationData: Observation) {
  try {
    const validateObservation = observationsSchemas.parse(observationData);

    const createdObservation = await prisma.observation.create({
      data: {
        masterId: validateObservation.masterId,
        pokemonId: validateObservation.pokemonId,
        description: validateObservation.description
      },
    });

    return createdObservation;
  }catch (error) {
    console.error("Erro na criação do comentário", error);
    throw error;
  }
}
