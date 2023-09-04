'use client'

import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import { ArrowRight } from 'lucide-react'
import { usePasswordController } from './usePasswordController'

export default function PasswordForm() {
  const { handleSubmit, register } = usePasswordController()

  const isLoading = false

  return (
    <AuthForm.Root
      title="Create a new account"
      description="at the speeed of thought"
      multistep={{
        currentStep: 2,
        totalSteps: 5,
      }}
    >
      <AuthForm.Form
        className="flex  w-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {/* Password */}
        <Input.Root>
          <Input.Control
            hasError={false}
            type="password"
            placeholder="Password"
            {...register('password')}
          />
        </Input.Root>

        {/* Confirm Password */}
        <Input.Root>
          <Input.Control
            hasError={false}
            type="password"
            placeholder="Confirm password"
            {...register('confirmPassword')}
          />
        </Input.Root>

        <div className="flex flex-col gap-1 mt-2">
          <Button size="form" type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner size="md" />
            ) : (
              <>
                <span>Next step</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
