import { PasswordHashEntity } from "../../src/@core/entities/password-hash-entity";
import { User } from "../../src/modules/users/domain/entities/user";
import { UsersRepository } from "../../src/modules/users/domain/repositories/users-repository";


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
      password: new PasswordHashEntity('123456'),
      profileImage: 'url.png',
      roles: [],
      technologies: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.items.push(user);
  }

  async findById(id: string) {
    const user = this.items.find((item) => item.id.toString() === id);

    if (!user) {
      return null;
    }

    return user;
  }
}
