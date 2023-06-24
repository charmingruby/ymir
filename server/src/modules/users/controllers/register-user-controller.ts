import { Controller, Get } from '@nestjs/common';
import { RegisterUserService } from '../services/register-user-service';

@Controller('users')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Get()
  handle() {
    return this.registerUserService.create();
  }
}
