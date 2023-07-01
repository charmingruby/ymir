import { Resolver } from '@nestjs/graphql';
import { RegisterUserUseCase } from 'src/modules/users/use-cases/register-user/register-user-use-case';

@Resolver('registerUserService')
export class RegisterUserResolver {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}
}
