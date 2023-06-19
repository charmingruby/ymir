import { randomUUID } from 'crypto'
import { Entity } from '../../../core/entities/entity'
import { Optional } from '../../../core/types/optional'

interface UserProps {
  name: string
  description?: string 
  lastName: string
  email: string
  password: string
  birthDate: Date
  country: string
  lookingForWork: boolean
  profileImage: string
  githubUser: string
  roles: string[]
  level: string
  experience: string[]
  technologies: string[]
  createdAt: Date,
  updatedAt?: Date
}

export class User extends Entity<UserProps> {
 

  static create(
    props: Optional<UserProps, 'createdAt'>,
    id?: string
  ) {
    const user = new User({
      ...props,
      createdAt: new Date()
    }, 
    id)
  
    return user
  }
}
