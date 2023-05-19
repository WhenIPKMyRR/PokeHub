import { z } from "zod";

export const pokemonSchema = z.object({
    id: z.number(),
    name: z.string().min(3).max(255),
    type: z.string().min(3).max(255),
    masterId: z.number(),
    is_favorite: z.boolean(),
    is_seen: z.boolean(),
    is_caught: z.boolean(),
})

export type Pokemon = z.infer<typeof pokemonSchema>