import { User } from "../../domain/entities/User";
import { prisma } from "../database/client";
import { IUserRepository } from "../interfaces/IUserRepositorie";


export class UserRepository implements IUserRepository {
  async findByEmail(email: string) {
    const data =  await prisma.user.findUnique({
      where: { email },
    });

    if (!data) {
      return null;
    }
    return new User(
      data.id.toString(),
      data.name,
      data.email,
      data.password || "",
    );
  }
async findById(id: string): Promise<User | null> {
  const data = await prisma.user.findUnique({
    where: { id: Number(id) },  
  });

  if (!data) return null;

  return new User(
    data.id.toString(),
    data.name,
    data.email,
    data.password
  );
}


async create(user: User): Promise<User> {
  const data = await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password
    }
  });

  return new User(
    data.id.toString(),
    data.name,
    data.email,
    data.password
  );
}


}