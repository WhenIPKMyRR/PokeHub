import { z } from "zod";

export const observationsSchemas = z.object({
    description: z.string().min(3).max(255),
    userId: z.number().int(),
    pokemonId: z.number().int(),
})

export type Observations = z.infer<typeof observationsSchemas>