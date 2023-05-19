import { userSchema } from "../../schemas/User/userSchema";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function updateUser(userId: number, userData: User) {
  try {
    const validatedUser = userSchema.parse(userData);

    const updatedUser =  await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            name: validatedUser.name,
            email: validatedUser.email,
            password: validatedUser.password,
        }
    })

    return updatedUser;
  } catch (error) {
    console.error("Erro na atualização das informações do usuário", error);
    throw error;
  }
}
