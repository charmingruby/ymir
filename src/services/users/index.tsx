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

interface CreateProfileRequest {
  bio: string
  stack: string
  role: string
  username: string
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

const connectGithub = async ({ githubUser }: ConnectGithubRequest) => {
  try {
    const res = await api.post(`/api/users/connect-github`, {
      githubUser,
    })

    return await res.data
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data
    }
  }
}

const createProfile = async ({
  bio,
  role,
  stack,
  username,
}: CreateProfileRequest) => {
  try {
    const res = await api.post('/api/users/update-profile', {
      bio,
      role,
      stack,
      username,
    })
    return await res.data
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data
    }
  }
}

export { validatePersonalDetails, createUser, connectGithub, createProfile }
