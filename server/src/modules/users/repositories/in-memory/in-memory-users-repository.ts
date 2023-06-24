import { User } from '../../domain/user/user';
import { UsersRepository } from '../users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  items: User[] = [];

  async create() {
    return 'ok';
  }
}
