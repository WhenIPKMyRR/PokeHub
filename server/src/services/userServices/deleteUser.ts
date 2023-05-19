import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteUser(id: number) {
  try {
    
    const deletedUser = await prisma.user.delete({
        where: {
            id: id
        }
    });

    return deletedUser;
  }catch (error) {
    console.error("Erro ao deletar usuário", error);
    throw error;
  }
}
