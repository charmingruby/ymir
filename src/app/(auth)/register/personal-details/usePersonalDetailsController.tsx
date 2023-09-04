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
    .pipe(z.coerce.date().max(new Date())),
  country: z
    .string({
      required_error: "Country can't be blank.",
    })
    .nonempty(),
})

type PersonalDetailsFormData = z.infer<typeof personalDetailsForm>

export function usePersonalDetailsController() {
  const [formSubmitErrors, setFormSubmitErrors] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { totalSteps, assignPersonalDetails } = useUserRegisterStore()
  const { push } = useRouter()

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<PersonalDetailsFormData>({
    resolver: zodResolver(personalDetailsForm),
  })

  const handleSubmit = hookFormHandleSubmit((data: PersonalDetailsFormData) => {
    console.log(data)
    try {
      push('/register/personal-details')
    } catch (err) {
      console.error(err)
    }
  })

  const isButtonDisabled = isLoading

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
