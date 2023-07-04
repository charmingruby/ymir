import { PasswordHashEntity } from '../../../@core/entities/password-hash-entity'
import { UniqueEntityID } from '../../../@core/entities/unique-entity-id'
import { User as PrismaUser } from '@prisma/client'
import { User } from '../../../domain/enterprise/entities/user'

export class PrismaUsersMapper {
  public static toPrisma(user: User): PrismaUser {
    return {
      id: user.id.toString(),
      name: user.name,
      description: user.description,
      lastName: user.lastName,
      email: user.email,
      password: user.password.passwordHash,
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
    }
  }

  public static toDomain(user: PrismaUser): User {
    return User.create(
      {
        name: user.name,
        description: user.description,
        lastName: user.lastName,
        email: user.email,
        password: new PasswordHashEntity(user.password),
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
    )
  }
}
