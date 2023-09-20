import { validatePersonalDetails } from '@/services/users'
import { useUserRegisterStore } from '@/store/user-register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const personalDetailsForm = z.object({
  name: z.string().nonempty({
    message: "Name can't be blank.",
  }),
  lastName: z.string().nonempty({
    message: "Last name can't be blank.",
  }),
  email: z
    .string()
    .nonempty({
      message: "Email can't be blank.",
    })
    .email({
      message: 'Invalid email format.',
    })
    .nonempty({
      message: "E-mail can't be blank.",
    }),
  birthdate: z
    .string()
    .nonempty({ message: "Birthdate can't be blank." })
    .pipe(z.coerce.date().max(new Date(), { message: 'Invalid birthdate.' })),
})

type PersonalDetailsFormData = z.infer<typeof personalDetailsForm>

export function usePersonalDetailsController() {
  const { push } = useRouter()

  const [formSubmitErrors, setFormSubmitErrors] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { totalSteps, assignPersonalDetails } = useUserRegisterStore()
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    watch,
  } = useForm<PersonalDetailsFormData>({
    resolver: zodResolver(personalDetailsForm),
  })

  const nameField = watch('name')
  const lastNameField = watch('lastName')
  const emailField = watch('email')
  const birthdateField = watch('birthdate')

  const fieldsFilled =
    nameField && lastNameField && emailField && birthdateField
  const isButtonDisabled = isLoading || !fieldsFilled

  const handleSubmit = hookFormHandleSubmit(
    async ({ name, lastName, email, birthdate }: PersonalDetailsFormData) => {
      try {
        setIsLoading(true)

        const user = await validatePersonalDetails({
          email,
        })

        if (user) {
          setFormSubmitErrors('Email is already taken.')
          setIsLoading(false)
          return
        }

        assignPersonalDetails({
          name,
          lastName,
          email,
          birthdate,
        })

        push('/register/password')
        setIsLoading(true)
      } catch (err) {
        console.error(err)
      }
    },
  )

  return {
    handleSubmit,
    formSubmitErrors,
    isLoading,
    register,
    errors,
    totalSteps,
    isButtonDisabled,
  }
}
