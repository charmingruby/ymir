import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../domain/repositories/users-repository';
import { RegisterUserInput } from '../../infra/http/dto/register-user-input';

interface RegisterUserUseCaseRequest {}

@Injectable()
export class RegisterUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(registerUserInput: RegisterUserInput): Promise<void> {}
}
