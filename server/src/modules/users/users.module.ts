import { Module } from '@nestjs/common';
import { RegisterUserResolver } from './infra/gql/resolvers/register-user.resolver';
import { RegisterUserUseCase } from './use-cases/register-user/register-user-use-case';

@Module({
  providers: [RegisterUserResolver, RegisterUserUseCase],
})
export class UsersModule {}
