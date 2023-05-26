import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email({message: "Endereço de email inválido!"}),
    password: z.string().min(6).max(20),
    token: z.string()
})
export type User = z.infer<typeof userSchema>
