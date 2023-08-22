import { hash } from 'bcrypt'

export async function GenerateHash(value: string) {
  return await hash(value, 6)
}
