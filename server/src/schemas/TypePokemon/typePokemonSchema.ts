import { z } from "zod";

export const typePokemonSchema = z.object({
    id: z.number(),
    name: z.string().min(3).max(255),
    color: z.string(),
})

export type TypePokemon = z.infer<typeof typePokemonSchema>