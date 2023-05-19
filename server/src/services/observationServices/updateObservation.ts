import { PrismaClient, Observation } from "@prisma/client";
import { observationsSchemas } from "../../schemas/Observations/observationSchema";

const prisma = new PrismaClient();

export async function updateObservation(id: number, observationData: Observation) {
  try {
    const validateObservation = observationsSchemas.parse(observationData);

    const updatedObservation =  await prisma.observation.update({
        where: {
            id: id
        },
        data: {
            masterId: validateObservation.masterId,
            pokemonId: validateObservation.pokemonId,
            description: validateObservation.description
        }
    })

    return updatedObservation;
  } catch (error) {
    console.error("Erro na atualização das informações do comentário", error);
    throw error;
  }
}
