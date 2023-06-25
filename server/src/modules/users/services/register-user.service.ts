import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterUserService {
  async execute() {
    return 'register user';
  }
}
