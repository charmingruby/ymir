'use client'

import { useUserRegisterStore } from '@/store/user-register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { createUser } from '@/services/users'

const passwordFormSchema = z.object({
  password: z
    .string()
    .nonempty({
      message: "Password can't be blank.",
    })
    .min(7, 'Password must be at least 7 characters.')
    .max(14, {
      message: 'Password must be a maximum of 14 characters.',
    }),
  confirmPassword: z.string().nonempty({
    message: "Confirmed password can't be blank.",
  }),
})

type PasswordFormData = z.infer<typeof passwordFormSchema>

export function usePasswordController() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formSubmitError, setFormSubmitError] = useState<string | null>(null)

  const { totalSteps, name, lastName, email, birthdate } =
    useUserRegisterStore()

  const { push } = useRouter()

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordFormSchema),
  })

  const handleSubmit = hookFormHandleSubmit(async (data: PasswordFormData) => {
    try {
      setIsLoading(true)
      const { password, confirmPassword } = data

      const passwordsMatch = password === confirmPassword

      if (!passwordsMatch) {
        setFormSubmitError("Passwords doesn't match.")
        setIsLoading(false)
        return
      }

      await createUser({
        name,
        lastName,
        email,
        birthdate,
        password,
      })

      push('/register/connect-github')
      setIsLoading(false)
    } catch (err) {
      console.error(err)
    }
  })

  const passwordField = watch('password')
  const confirmPasswordField = watch('confirmPassword')

  const fieldsFilled = passwordField && confirmPasswordField

  const isButtonDisabled = isSubmitting || isLoading || !fieldsFilled

  return {
    register,
    handleSubmit,
    formSubmitError,
    totalSteps,
    errors,
    isButtonDisabled,
    isLoading,
  }
}
