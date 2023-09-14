import { api } from '@/libs/axios'
import { AxiosError } from 'axios'

interface CreateUserRequest {
  name: string
  lastName: string
  email: string
  birthdate: Date
  password: string
}

interface ConnectGithubRequest {
  email: string
  githubUser: string
}

const getUserByEmail = async (email: string) => {
  try {
    const res = await api.post('/api/users/get-user-by-email', {
      email,
    })

    const data = await res.data

    if (!data) {
      return null
    }

    return data
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data
    }
  }
}

const createUser = async (props: CreateUserRequest) => {
  await api.post('/api/register', props)
}

const connectGithub = async ({ email, githubUser }: ConnectGithubRequest) => {
  const res = await api.post(`/api/connect-github/${email}`, {
    githubUser,
  })

  return res
}

export { getUserByEmail, createUser, connectGithub }
