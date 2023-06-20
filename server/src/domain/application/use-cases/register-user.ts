import { UsersRepository } from "../repositories/users-repositories";

interface RegisterUserUseCaseRequest {
  name: string
  description?: string
  lastName: string
  email: string
  password: string
  birthDate: Date
  country: string
  lookingForWork: boolean
  profileImage: string
  githubUser: string
  roles: string[]
  level: string
  experience: string[]
  technologies: string[]
}

export class RegisterUserUseCase {
    constructor(private usersRepository: UsersRepository) {}

    async execute({
      name,
      description,
      lastName,
      email,
      password,
      birthDate,
      country,
      lookingForWork,
      profileImage,
      githubUser,
      roles,
      level,
      experience,
      technologies,
    }: RegisterUserUseCaseRequest) {

    }
}
