import { InMemoryUsersRepository } from '../../../../test/repositories/in-memory-users-repository'
import { User } from './user'

let usersRepository: InMemoryUsersRepository

describe('User Entity', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
  })

  it('should be able to create a user entity', () => {
    const user = User.create({
      name: 'John',
      lastName: 'Doe',
      description: '',
      email: 'johndoe@example.com',
      password: '123456',
      birthDate: new Date(),
      country: 'Brazil',
      lookingForWork: true,
      profileImage: 'image.png',
      githubUser: 'johnDoe',
      roles: [],
      level: 'Senior',
      experience: [],
      technologies: [],
    })

    usersRepository.create(user)

    expect(user.id).toBeTruthy()
    expect(usersRepository.items[0].props).toEqual(
      expect.objectContaining({
        name: 'John',
      }),
    )
    expect(usersRepository.items).toHaveLength(1)
  })
})
