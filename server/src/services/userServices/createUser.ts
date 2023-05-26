import { userSchema } from "../../schemas/User/userSchema";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(userData: User) {
  try {
    const validatedUser = userSchema.parse(userData);

    const createdUser = await prisma.user.create({
      data: {
        name: validatedUser.name,
        email: validatedUser.email,
        password: validatedUser.password,
        token: validatedUser.token
      },
    });

    return createdUser;
  }catch (error) {
    console.error("Erro na criação do usuário", error);
    throw error;
  }
}
