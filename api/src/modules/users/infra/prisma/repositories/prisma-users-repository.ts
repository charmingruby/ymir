import { prisma } from 'src/infra/prisma';
import { PrismaUsersMapper } from '../mappers/prisma-users-mapper';
import { UsersRepository } from 'src/modules/users/domain/repositories/users-repository';
import { User } from 'src/modules/users/domain/entities/user';

export class PrismaUsersRepository implements UsersRepository {
  async create({ props }: User) {
    const passwordHashedString = props.password.toString();

    await prisma.user.create({
      data: {
        ...props,
        password: passwordHashedString,
      },
    });
  }
  async findById(id: string) {
    const userPrismaData = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userPrismaData) {
      return null;
    }

    const user = PrismaUsersMapper.toDomain(userPrismaData);

    return user;
  }
}
