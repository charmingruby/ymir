'use client'

import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import { FieldError } from '@/components/ui/form/field-error'
import { ArrowRight } from 'lucide-react'
import { usePersonalDetailsController } from './usePersonalDetailsController'

export default function PersonalDetailsForm() {
  const {
    totalSteps,
    errors,
    isButtonDisabled,
    formSubmitErrors,
    isLoading,
    register,
    handleSubmit,
  } = usePersonalDetailsController()

  return (
    <AuthForm.Root
      title="Create a new account"
      description="at the speeed of thought"
      multistep={{
        currentStep: 1,
        totalSteps,
      }}
    >
      <AuthForm.Form
        className="flex  w-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="w-full grid gap-2 grid-cols-1 md:grid-cols-2">
          {/* Name */}
          <Input.Root>
            <Input.Control
              placeholder="Name"
              hasError={!!errors?.name}
              {...register('name')}
            />
            {errors.name && <FieldError errorMessage={errors.name.message} />}
          </Input.Root>

          {/* Last name */}
          <Input.Root>
            <Input.Control
              placeholder="Last name"
              hasError={!!errors?.lastName}
              {...register('lastName')}
            />
            {errors.lastName && (
              <FieldError errorMessage={errors.lastName?.message} />
            )}
          </Input.Root>
        </div>

        {/* Email */}
        <Input.Root>
          <Input.Control
            placeholder="Email"
            hasError={!!errors?.email}
            {...register('email')}
          />
          {errors.email && <FieldError errorMessage={errors.email.message} />}
        </Input.Root>

        {/* Birthdate */}
        <Input.Root>
          <Input.Control
            type="date"
            placeholder="Birthdate"
            required={false}
            hasError={!!errors?.birthdate}
            {...register('birthdate')}
          />
          {errors.birthdate && (
            <FieldError errorMessage={errors.birthdate?.message} />
          )}
        </Input.Root>

        <div className="flex flex-col gap-1 mt-2">
          <Button size="form" type="submit" disabled={!!isButtonDisabled}>
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
