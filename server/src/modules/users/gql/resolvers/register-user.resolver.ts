import { RegisterUserService } from '../../services/register-user.service';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('registerUserService')
export class RegisterUserResolver {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Mutation('registerUser')
  handle() {
    return this.registerUserService.execute();
  }

  @Query('getProfile')
  getProfile() {
    return 'gustavo Dias';
  }
}
