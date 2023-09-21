'use client'

import { createProfile } from '@/services/users'
import { useUserRegisterStore } from '@/store/user-register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const profileForm = z.object({
  username: z
    .string()
    .min(4, 'Username must be at least 4 characters.')
    .max(16, 'Username must have a maximum of 16 characters.'),
  role: z
    .string()
    .min(6, 'Role must be at least 6 characters.')
    .max(32, 'Role must have a maximum of 32 characters.'),
  bio: z
    .string()
    .min(16, 'Bio must be at least 16 characters.')
    .max(72, 'Bio must have a maximum of 72 characters.'),
  stack: z
    .string()
    .min(8, 'Stack must be at least 8 characters.')
    .max(32, 'Stack must have a maximum of 32 characters.'),
})

type ProfileFormData = z.infer<typeof profileForm>

interface ProfileFormResponse {
  data: {
    message: string
    statusCode: number
  }
}

export function useProfileController() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { push } = useRouter()

  const { totalSteps } = useUserRegisterStore()
  const {
    register,
    formState: { errors, isSubmitting },
    watch,
    handleSubmit: hookFormHandleSubmit,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileForm),
  })

  const usernameField = watch('username')
  const bioField = watch('bio')
  const roleField = watch('role')
  const stackField = watch('stack')

  const fieldsFilled = usernameField && bioField && roleField && stackField

  const isButtonDisabled = !fieldsFilled || isLoading || isSubmitting

  const handleSubmit = hookFormHandleSubmit(
    async ({ bio, role, stack, username }: ProfileFormData) => {
      setIsLoading(true)

      try {
        const {
          data: { statusCode },
        }: ProfileFormResponse = await createProfile({
          bio,
          role,
          stack,
          username,
        })

        if (statusCode === 403) {
          push('/register/personal-details')
          setIsLoading(false)
          return
        }

        if (statusCode === 404) {
          push('/register/personal-details')
          setIsLoading(false)
        }

        push('/login')
      } catch (err) {
        console.error(err)
      }
    },
  )

  return {
    totalSteps,
    register,
    handleSubmit,
    isButtonDisabled,
    errors,
    isLoading,
  }
}
