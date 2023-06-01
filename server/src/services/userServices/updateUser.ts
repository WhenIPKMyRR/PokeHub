import { userSchema } from "../../schemas/User/userSchema";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function updateUser(userId: number, userData: User) {
  try {

    const updatedUser =  await prisma.user.update({
        where: {
            id: userId
        },
        data: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password,
          token: "",
          isAdmin: userData.isAdmin,
          avatar: userData.avatar,
        }
    })

    return updatedUser;
  } catch (error) {
    console.error("Erro na atualização das informações do usuário", error);
    throw error;
  }
}
