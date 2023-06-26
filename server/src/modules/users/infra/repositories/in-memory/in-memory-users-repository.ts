import { User } from '../../domain/user';
import { UsersRepository } from '../../../domain/repositories/users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  items: User[] = [];

  async create() {
    const user = User.create({
      name: 't',
      lastName: 't',
      birthDate: new Date(),
      email: 'g@gmail.com',
      country: 'Brazil',
      experiences: [],
      githubUser: 'charmingruby',
      level: 'Intern',
      lookingForWork: true,
      password: '123456',
      profileImage: 'url.png',
      roles: [],
      technologies: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.items.push(user);
  }

  async findById(id: string) {
    const user = this.items.find((item) => item._id === id);

    if (!user) {
      return null;
    }

    return user;
  }
}
