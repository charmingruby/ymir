'use client'

import * as TextArea from '@/components/ui/form/text-area'
import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { Label } from '@/components/ui/form/label'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import { FieldError } from '@/components/ui/form/field-error'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUserRegisterStore } from '@/store/user-register'

const personalDetailsForm = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string(),
  birthDate: z.string(),
  country: z.string(),
})

type PersonalDetailsFormData = z.infer<typeof personalDetailsForm>

export default function PersonalDetailsForm() {
  const [formSubmitErrors, setFormSubmitErrors] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { totalSteps } = useUserRegisterStore()

  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalDetailsFormData>({
    resolver: zodResolver(personalDetailsForm),
  })

  async function handleSetPersonalDetails(data: PersonalDetailsFormData) {
    try {
      setIsLoading(true)
      setFormSubmitErrors(null)

      console.log(data)

      push('/register/personal-details')
    } catch (err) {
      console.error(err)
    }
  }

  const isButtonDisabled = isLoading

  return (
    <AuthForm.Root
      title="Create a new account"
      description="at the speeed of thought"
      multistep={{
        currentStep: 3,
        totalSteps,
      }}
    >
      <AuthForm.Form
        className="flex  w-full flex-col gap-4"
        onSubmit={handleSubmit(handleSetPersonalDetails)}
      >
        {/* Username */}
        <Input.Root>
          <Label text="Username" />
          <Input.Control
            hasError={false}
            type="email"
            placeholder="john@doe.com"
            {...register('email')}
          />
        </Input.Root>
        {errors.email && <FieldError errorMessage={errors.email.message} />}

        {/* Github */}
        <Input.Root>
          <Label text="Github" />
          <Input.Control
            hasError={false}
            type="email"
            placeholder="john@doe.com"
            {...register('email')}
          />
        </Input.Root>
        {errors.email && <FieldError errorMessage={errors.email.message} />}

        {/* Bio */}
        <TextArea.Root>
          <Label text="Biography" />
          <TextArea.Control placeholder="john@doe.com" {...register('email')} />
        </TextArea.Root>
        {errors.email && <FieldError errorMessage={errors.email.message} />}

        <div className="flex flex-col gap-1 mt-2">
          <Button size="form" type="submit" disabled={isButtonDisabled}>
            {isLoading ? (
              <Spinner size="md" />
            ) : (
              <>
                <span>Next step</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
          {formSubmitErrors && <FieldError errorMessage={formSubmitErrors} />}
        </div>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
