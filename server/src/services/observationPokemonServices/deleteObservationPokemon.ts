import { PrismaClient, ObservationPokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteObservation(id: number) {
  try {
    const deletedObservation = await prisma.observationPokemon.delete({
        where: {
          id: id
        }
    });

    return deletedObservation;
  }catch (error) {
    console.error("Erro ao deletar comentário", error);
    throw error;
  }
}
