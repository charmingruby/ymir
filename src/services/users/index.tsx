import { api } from '@/libs/axios'

interface CreateUserRequest {
  name: string
  lastName: string
  email: string
  birthdate: Date
  password: string
}

const getUserByEmail = async (email: string) => {
  const res = await api.post('/api/users/get-user-by-email', {
    email,
  })

  const data = await res.data

  if (!data) {
    return null
  }

  return data
}

const createUser = async (props: CreateUserRequest) => {
  await api.post('/api/users/register', props)
}

export { getUserByEmail, createUser }
