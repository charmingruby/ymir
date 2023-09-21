'use client'

import * as TextArea from '@/components/ui/form/text-area'
import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import { ArrowRight } from 'lucide-react'
import { useProfileController } from './useProfileController'
import { FieldError } from '@/components/ui/form/field-error'

export default function ProfileForm() {
  const {
    handleSubmit,
    register,
    totalSteps,
    errors,
    isButtonDisabled,
    isLoading,
  } = useProfileController()

  return (
    <AuthForm.Root
      title="Create a new account"
      description="at the speeed of thought"
      multistep={{
        currentStep: 4,
        totalSteps,
      }}
    >
      <AuthForm.Form
        className="flex  w-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {/* Username */}
        <Input.Root>
          <Input.Control
            hasError={!!errors.username}
            placeholder="Username"
            {...register('username')}
          />
          {errors.username && (
            <FieldError errorMessage={errors.username.message} />
          )}
        </Input.Root>

        {/* Role */}
        <Input.Root>
          <Input.Control
            hasError={!!errors.role}
            placeholder="Role"
            {...register('role')}
          />
          {errors.role && <FieldError errorMessage={errors.role.message} />}
        </Input.Root>

        {/* Stack */}
        <Input.Root>
          <Input.Control
            hasError={!!errors.stack}
            placeholder="Stack"
            {...register('stack')}
          />
          {errors.stack && <FieldError errorMessage={errors.stack.message} />}
        </Input.Root>

        {/* Bio */}
        <TextArea.Root>
          <TextArea.Control
            hasError={!!errors.bio}
            placeholder="Biography"
            {...register('bio')}
          />
          {errors.bio && <FieldError errorMessage={errors.bio.message} />}
        </TextArea.Root>

        <div className="flex flex-col gap-1 mt-2">
          <Button
            size="form"
            type={isButtonDisabled ? 'button' : 'submit'}
            className="w-full"
            disabled={isButtonDisabled}
          >
            {isLoading ? (
              <Spinner />
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
