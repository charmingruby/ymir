import { UsersRepository } from '../../src/modules/accounts/domain/repositories/users-repository'
import { User } from '@/modules/accounts/domain/entities/user'

export default class InMemoryUsersRepository implements UsersRepository {
  items: User[] = []

  async create(user: User) {
    this.items.push(user)
  }

  async findById(id: string) {
    const user = this.items.find((item) => item.id.toString() === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
}
