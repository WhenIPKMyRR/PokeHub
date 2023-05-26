import { z } from "zod";

export const favoritePokemonSchema = z.object({
    userId: z.number().int(),
    pokemonId: z.number().int(),
})

export type FavoritePokemon = z.infer<typeof favoritePokemonSchema>