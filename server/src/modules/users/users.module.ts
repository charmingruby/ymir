import { Module } from '@nestjs/common';
import { RegisterUserService } from './services/register-user.service';
import { RegisterUserResolver } from './infra/gql/resolvers/register-user.resolver';

@Module({
  providers: [RegisterUserResolver, RegisterUserService],
})
export class UsersModule {}
