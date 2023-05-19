import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function getByIdUser(id: number): Promise<User | null>{
    try{
        const user = await prisma.user.findUnique({
          where: {
            id,
          },
        });
    
        return user
    } catch (error) {
        console.error("Erro na busca do usuário", error);
        throw error;
    }
}