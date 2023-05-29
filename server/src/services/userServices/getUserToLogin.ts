import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secretKey = "WhenIParkMyRR"; // Substitua pelo seu próprio segredo

export async function getUserToLogin(input: User): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: input.email
        }
      });
  
      if (!user) {
        return null;
      }
  
      const passwordMatch = await bcrypt.compare(input.password, user.password);
  
      if (!passwordMatch) {
        return null;
      }
  
      const token = jwt.sign({ userId: user.id }, secretKey);
      
      await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          token: token
        }
      });
  
      return user;
      
    } catch (error) {
      console.log(error);
      throw error;
    }
}