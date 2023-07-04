import { PasswordHashEntity } from '@/@core/entities/password-hash-entity'
import { UniqueEntityID } from '@/@core/entities/unique-entity-id'
import { User, UserProps } from '@/modules/accounts/domain/entities/user'
import { faker } from '@faker-js/faker'

export function makeUser(
  override: Partial<UserProps> = {},
  id?: UniqueEntityID,
) {
  const user = User.create(
    {
      name: faker.person.firstName(),
      description: faker.person.bio(),
      lastName: faker.person.lastName(),
      birthDate: new Date(),
      email: `${faker.person.firstName}@email.com`,
      country: faker.location.country(),
      experiences: [],
      githubUser: faker.person.fullName(),
      level: faker.person.jobArea(),
      lookingForWork: true,
      password: new PasswordHashEntity('123456'),
      profileImage: 'url.png',
      roles: [],
      technologies: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      ...override,
    },
    id,
  )

  return user
}
