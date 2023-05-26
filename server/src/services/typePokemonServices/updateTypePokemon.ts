import { typePokemonSchema } from "../../schemas/TypePokemon/typePokemonSchema";
import { PrismaClient, Pokemon, TypePokemon } from "@prisma/client";

const prisma = new PrismaClient();

export async function updateTypePokemon(id: number, typePokemonData: TypePokemon) {
  try {
    const validatedTypePokemon = typePokemonSchema.parse(typePokemonData);

    const updatedTypePokemon =  await prisma.typePokemon.update({
        where: {
            id: id
        },
        data: {
            name: validatedTypePokemon.name,
            color: validatedTypePokemon.color, 
        }
    })

    return updatedTypePokemon;
  } catch (error) {
    console.error("Erro na atualização das informações do tipo de pokemon", error);
    throw error;
  }
}
