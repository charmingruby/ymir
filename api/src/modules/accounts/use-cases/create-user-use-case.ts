import { PasswordHashEntity } from '@/@core/entities/password-hash-entity'
import { User } from '../domain/entities/user'
import { UsersRepository } from '../domain/repositories/users-repository'

interface CreateUserUseCaseRequest {
  name: string
  lastName: string
  description: string | null
  email: string
  password: string
  birthDate: Date
  country: string
  lookingForWork: boolean
  profileImage: string | null
  githubUser: string
  roles: string[]
  level: string
  experiences: string[]
  technologies: string[]
}

export class CreateUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(props: CreateUserUseCaseRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      props.email,
    )

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = User.create({
      ...props,
      password: new PasswordHashEntity(props.password),
    })

    this.usersRepository.create(user)
  }
}
