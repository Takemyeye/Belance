import jwt, { JwtPayload } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY || '';

interface DecodedToken extends JwtPayload {
  id: string;
}

export const verifyTokenAndGetUser = async (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY) as DecodedToken;

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      console.log("User not found");
      return null;
    }

    return user.id;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
