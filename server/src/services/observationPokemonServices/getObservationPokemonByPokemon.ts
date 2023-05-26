import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getObservationsPokemonByPokemon  = async (pokemonId: number) => {
    try {
        const observationsPokemon = await prisma.observationPokemon.findMany({
            where: {
               pokemon:{
                    
                    id: pokemonId
               }
              },
        })
        return observationsPokemon
    } catch (error) {
        console.error("Erro ao buscar as observações do pokemon ", error);
        throw error;
    }
}