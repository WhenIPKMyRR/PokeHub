import { userSchema } from "../../schemas/User/userSchema";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secretKey = "WhenIParkMyRR"; 

export async function createUser(userData: User) {
  try {
    const validatedUser = userSchema.parse(userData);
    const hashedPassword = await bcrypt.hash(validatedUser.password, 10);

    const createdUser = await prisma.user.create({
      data: {
        name: validatedUser.name,
        email: validatedUser.email,
        password: hashedPassword,
        token: "" // Definir um valor padrão para o campo "token"
      },
    });

    return createdUser;
  } catch (error) {
    console.error("Erro na criação do usuário", error);
    throw error;
  }
}
