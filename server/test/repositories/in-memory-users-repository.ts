import { UsersRepository } from "domain/application/repositories/users-repositories";
import { User } from "domain/enterprise/entities/user";

export class InMemoryUsersRepository implements UsersRepository{
    public items: User[] = []
    
    async create(user: User) {
        this.items.push(user)
    }  
}