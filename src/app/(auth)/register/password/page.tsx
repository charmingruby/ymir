'use client'

import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import { ArrowRight } from 'lucide-react'
import { usePasswordController } from './usePasswordController'
import { FieldError } from '@/components/ui/form/field-error'

export default function PasswordForm() {
  const {
    handleSubmit,
    register,
    totalSteps,
    isButtonDisabled,
    isLoading,
    formSubmitError,
    errors,
  } = usePasswordController()

  return (
    <AuthForm.Root
      title="Create a new account"
      description="at the speeed of thought"
      multistep={{
        currentStep: 2,
        totalSteps,
      }}
    >
      <AuthForm.Form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {/* Password */}
        <Input.Root>
          <Input.Control
            hasError={!!errors.password}
            type="password"
            required={false}
            placeholder="Password"
            {...register('password')}
          />
          <FieldError errorMessage={errors?.password?.message} />
        </Input.Root>

        {/* Confirm Password */}
        <Input.Root>
          <Input.Control
            hasError={!!errors.confirmPassword}
            type="password"
            placeholder="Confirm password"
            required={false}
            {...register('confirmPassword')}
          />
          <FieldError errorMessage={errors?.confirmPassword?.message} />
        </Input.Root>

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
          {formSubmitError && <FieldError errorMessage={formSubmitError} />}
        </div>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
