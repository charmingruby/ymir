import { compare } from 'bcrypt'

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
