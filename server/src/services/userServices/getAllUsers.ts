import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllUsers(): Promise<User[]>{
    try {
        const users = await prisma.user.findMany();

        return users
    } catch (error) {
        console.error("Erro na busca dos usuários", error);
        throw error;
    }
}