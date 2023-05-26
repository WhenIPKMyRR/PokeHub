import { z } from "zod";

export const pokemonSchema = z.object({
    name: z.string().min(3).max(255),
    type: z.string().min(3).max(255),
    image: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
    height: z.string(),
    weight: z.string(),
    baseExperience: z.number(),
    userId: z.number(), 
})

export type Pokemon = z.infer<typeof pokemonSchema>