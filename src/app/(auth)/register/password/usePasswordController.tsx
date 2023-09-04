'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const passwordFormSchema = z.object({
  password: z.string().nonempty(),
  confirmPassword: z.string().nonempty(),
})

type PasswordFormData = z.infer<typeof passwordFormSchema>

export function usePasswordController() {
  const { handleSubmit: hookFormHandleSubmit, register } =
    useForm<PasswordFormData>({
      resolver: zodResolver(passwordFormSchema),
    })

  const handleSubmit = hookFormHandleSubmit((data: PasswordFormData) => {
    console.log(data)
  })

  return {
    register,
    handleSubmit,
  }
}
