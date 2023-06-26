import { Resolver } from '@nestjs/graphql';
import { RegisterUserService } from 'src/modules/users/services/register-user.service';

@Resolver('registerUserService')
export class RegisterUserResolver {
  constructor(private readonly registerUserService: RegisterUserService) {}
}
