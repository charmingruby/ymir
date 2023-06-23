import { User } from '../../enterprise/entities/user';

export interface UsersRepository {
  create: (data: User) => Promise<void>;
}
