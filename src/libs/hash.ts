import { compare, hash } from 'bcrypt'

interface CompareHashRequest {
  hash: string
  valueToValidate: string
}

export async function compareHash({
  hash,
  valueToValidate,
}: CompareHashRequest) {
  return await compare(valueToValidate, hash)
}

export async function generateHash(value: string) {
  return await hash(value, 6)
}
