'use client'

import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { Label } from '@/components/ui/form/label'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldError } from '@/components/ui/form/field-error'

const betaKeyFormSchema = z.object({
  secretValue: z.string().nonempty({ message: "Secret value can't be blank." }),
  senderUsername: z
    .string()
    .nonempty({ message: "Sender username can't be blank." }),
})

type BetaKeyFormData = z.infer<typeof betaKeyFormSchema>

export default function Beta() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<BetaKeyFormData>({
    resolver: zodResolver(betaKeyFormSchema),
  })

  function handleBetaKeySubmit(data: BetaKeyFormData) {
    console.log(data)
  }

  return (
    <AuthForm.Root
      title="Early access"
      description="If you have a beta key, enter here"
    >
      <AuthForm.Form onSubmit={handleSubmit(handleBetaKeySubmit)}>
        <Input.Root>
          <Label text="Secret value" />
          <Input.Control
            hasError={!!errors.secretValue}
            placeholder="saturn-moon"
            {...register('secretValue')}
          />
          {errors.secretValue && (
            <FieldError errorMessage={errors.secretValue.message} />
          )}
        </Input.Root>

        <Input.Root>
          <Label text="Sender username" />
          <Input.Control
            hasError={!!errors.senderUsername}
            placeholder="John Doe"
            {...register('senderUsername')}
          />
          {errors.senderUsername && (
            <FieldError errorMessage={errors.senderUsername.message} />
          )}
        </Input.Root>

        <Button size="form" type="submit">
          <span>Submit key</span>
        </Button>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
