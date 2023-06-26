import { prisma } from 'src/infra/prisma';
import { User } from '../../../domain/user';
import { UsersRepository } from '../../../../domain/repositories/users-repository';
import { PrismaUsersMapper } from '../mappers/prisma-users-mapper';

export class PrismaUsersRepository implements UsersRepository {
  async create({ props }: User) {
    await prisma.user.create({
      data: {
        ...props,
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
