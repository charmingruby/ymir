import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../domain/repositories/users-repository';

@Injectable()
export class RegisterUserService {
  constructor(private readonly usersRepository: UsersRepository) {}
}
