import { User as PrismaUser } from '@prisma/client';
import { UniqueEntityID } from 'src/@core/entities/unique-entity-id';
import { User } from 'src/modules/users/domain/entities/user';

export class PrismaUsersMapper {
  public static toPrisma(user: User): PrismaUser {
    return {
      id: user.id.toString(),
      name: user.name,
      description: user.description,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      birthDate: user.birthDate,
      country: user.country,
      lookingForWork: user.lookingForWork,
      profileImage: user.profileImage,
      githubUser: user.githubUser,
      createdAt: user.createdAt,
      experiences: user.experiences,
      level: user.level,
      technologies: user.technologies,
      roles: user.roles,
      updatedAt: user.updatedAt,
    };
  }

  public static toDomain(user: PrismaUser): User {
    return User.create(
      {
        name: user.name,
        description: user.description,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        birthDate: user.birthDate,
        country: user.country,
        lookingForWork: user.lookingForWork,
        profileImage: user.profileImage,
        githubUser: user.githubUser,
        createdAt: user.createdAt,
        experiences: user.experiences,
        level: user.level,
        technologies: user.technologies,
        roles: user.roles,
        updatedAt: user.updatedAt,
      },
      new UniqueEntityID(user.id),
    );
  }
}
