import { api } from '@/libs/axios'
import { AxiosError } from 'axios'

interface ValidatePersonalDetailsRequest {
  email: string
}

interface CreateUserRequest {
  name: string
  lastName: string
  email: string
  birthdate: Date
  password: string
}

interface ConnectGithubRequest {
  githubUser: string
}

const validatePersonalDetails = async ({
  email,
}: ValidatePersonalDetailsRequest) => {
  try {
    const res = await api.post('/api/users/validate-personal-details', {
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
  await api.post('/api/users', props)
}

// const getUserGithubData = async () => {
//   await api.get('/api/')
// }

const connectGithub = async ({ githubUser }: ConnectGithubRequest) => {
  const res = await api.post(`/api/connect-github`, {
    githubUser,
  })

  return res
}

export { validatePersonalDetails, createUser, connectGithub }
