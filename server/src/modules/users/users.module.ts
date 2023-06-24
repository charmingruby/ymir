import { Module } from '@nestjs/common';
import { RegisterUserService } from './services/register-user-service';
import { RegisterUserController } from './controllers/register-user-controller';

@Module({
  providers: [RegisterUserService],
  controllers: [RegisterUserController],
})
export class UsersModule {}
