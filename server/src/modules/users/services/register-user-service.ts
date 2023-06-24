import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterUserService {
  async create() {
    return { oi: 'hello' };
  }
}
