import { User } from '../../domain/user/user';
import { UsersRepository } from '../users-repository';

export class InMemoryUsersRepository implements UsersRepository<User> {
  items: User[] = [];

  async create() {
    const user = User.create({
      name: 't',
      lastName: 't',
      birthDate: new Date(),
      email: 'g@gmail.com',
      country: 'Brazil',
      experience: [],
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

    return user;
  }
}
