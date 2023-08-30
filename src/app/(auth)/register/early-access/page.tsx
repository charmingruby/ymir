'use client'

import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { Label } from '@/components/ui/form/label'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldError } from '@/components/ui/form/field-error'
import { useState } from 'react'
import { ResponseMessageProps } from '@/utils/response-message'
import { useRouter } from 'next/navigation'
import { Spinner } from '@/components/spinner'
import { UserServices } from '@/services/users'
import { useUserRegisterStore } from '@/store/user-register'

const earlyAccessFormSchema = z.object({
  accessKey: z.string().nonempty({ message: "Access key can't be blank." }),
})

type EarlyAccessFormData = z.infer<typeof earlyAccessFormSchema>

export default function Beta() {
  const [formSubmitErrors, setFormSubmitErrors] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { assignAccessKey } = useUserRegisterStore()

  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EarlyAccessFormData>({
    resolver: zodResolver(earlyAccessFormSchema),
  })

  async function handleBetaKeySubmit(data: EarlyAccessFormData) {
    const { accessKey } = data

    try {
      setIsLoading(true)
      setFormSubmitErrors(null)

      const res = await UserServices.validateEarlyAccessKey({ accessKey })

      if (res.status !== 200) {
        const error: ResponseMessageProps = await res.json()
        setFormSubmitErrors(error.message)
        setIsLoading(false)
        return
      }

      const validatedAccessKeyAt = assignAccessKey()

      console.log(validatedAccessKeyAt)
      push('/register/personal-details')
    } catch (err) {
      console.error(err)
    }
  }

  const accessKey = watch('accessKey')

  const isButtonDisabled = isLoading || !accessKey

  return (
    <AuthForm.Root
      title="Early access"
      description="If you have a beta key, enter here"
    >
      <AuthForm.Form onSubmit={handleSubmit(handleBetaKeySubmit)}>
        <Input.Root>
          <Label text="Access key" />
          <Input.Control
            hasError={!!errors.accessKey}
            placeholder="saturn-moon"
            {...register('accessKey')}
          />
          {errors.accessKey && (
            <FieldError errorMessage={errors.accessKey.message} />
          )}
        </Input.Root>

        <div className="flex flex-col gap-1">
          <Button size="form" type="submit" disabled={isButtonDisabled}>
            {isLoading ? <Spinner size="md" /> : <span>Submit key</span>}
          </Button>
          {formSubmitErrors && <FieldError errorMessage={formSubmitErrors} />}
        </div>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
