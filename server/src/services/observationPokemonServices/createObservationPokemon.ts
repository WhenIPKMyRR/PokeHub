import { PrismaClient, ObservationPokemon } from "@prisma/client";
import { observationsSchemas } from "../../schemas/ObservationPokemon/observationPokemonSchema";

const prisma = new PrismaClient();

export async function createObservation(observationData: ObservationPokemon) {
  try {
    const validateObservation = observationsSchemas.parse(observationData);

    const createdObservation = await prisma.observationPokemon.create({
      data: {
        description: validateObservation.description,
        userId: validateObservation.userId,
        pokemonId: validateObservation.pokemonId,
      },
    });

    return createdObservation;
  } catch (error) {
    console.error("Erro na criação da observação ", error);
    throw error;
  }
}
