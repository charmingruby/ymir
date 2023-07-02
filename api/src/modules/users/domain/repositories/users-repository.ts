import { User } from '../entities/user';

export interface UsersRepository {
  create(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
}
