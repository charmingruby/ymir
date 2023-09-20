'use client'

import { connectGithub } from '@/services/users'
import { useUserRegisterStore } from '@/store/user-register'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const connectGithubForm = z.object({
  githubUser: z.string().nonempty(),
})

type ConnectGithubFormData = z.infer<typeof connectGithubForm>

interface ConnectGithubResponse {
  data: {
    message: string
    statusCode: number
  }
}

export function useGithubController() {
  const [formSubmitErrors, setFormSubmitErrors] = useState<string | null>(null)
  const [connectionSuccess, setConnectionSuccess] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { totalSteps } = useUserRegisterStore()

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    watch,
  } = useForm<ConnectGithubFormData>({
    resolver: zodResolver(connectGithubForm),
  })

  const githubUserField = watch('githubUser')

  const isNextStepButtonDisabled =
    !githubUserField || isLoading || !connectionSuccess

  const handleSubmit = hookFormHandleSubmit(
    async ({ githubUser }: ConnectGithubFormData) => {
      try {
        setFormSubmitErrors(null)
        setIsLoading(true)
        const {
          data: { statusCode },
        }: ConnectGithubResponse = await connectGithub({
          githubUser,
        })

        if (statusCode === 409) {
          setIsLoading(false)
          setFormSubmitErrors('Github user already taken.')
          return
        }
        setConnectionSuccess(true)
        setIsLoading(false)
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response?.status === 404) {
            setFormSubmitErrors("Github user doesn't exists.")
          }
        }
      }
    },
  )

  return {
    totalSteps,
    handleSubmit,
    errors,
    register,
    formSubmitErrors,
    isLoading,
    connectionSuccess,
    isNextStepButtonDisabled,
  }
}
