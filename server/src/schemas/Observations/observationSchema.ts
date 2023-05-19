import { z } from "zod";

export const observationsSchemas = z.object({
    masterId: z.number().int(),
    pokemonId: z.number().int(),
    description: z.string().min(3).max(255),
})

export type Observations = z.infer<typeof observationsSchemas>