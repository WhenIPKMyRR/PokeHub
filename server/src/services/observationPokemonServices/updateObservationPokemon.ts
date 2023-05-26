import { PrismaClient, ObservationPokemon } from "@prisma/client";
import { observationsSchemas } from "../../schemas/ObservationPokemon/observationPokemonSchema";

const prisma = new PrismaClient();

export async function updateObservation(id: number, observationData: ObservationPokemon) {
  try {
    const validateObservation = observationsSchemas.parse(observationData);

    const updatedObservation = await prisma.observationPokemon.update({
      where: {
        id: id
      },
      data: {
        description: validateObservation.description,
        userId: validateObservation.userId,
        pokemonId: validateObservation.pokemonId,
      }
    })

    return updatedObservation;
  } catch (error) {
    console.error("Erro na atualização das informações do comentário", error);
    throw error;
  }
}
