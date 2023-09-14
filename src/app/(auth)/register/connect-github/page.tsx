'use client'

import * as AuthForm from '../../components/auth-form'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { useGithubController } from './useGithubController'
import { FieldError } from '@/components/ui/form/field-error'

export default function ConnectGithub() {
  const {
    totalSteps,
    handleSubmit,
    register,
    formSubmitErrors,
    errors,
    connectionSuccess,
  } = useGithubController()

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
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <div className="flex flex-row gap-2">
              <div className="bg-white border border-gray-100 rounded-lg shadow-sm flex items-center pl-3 h-[52px] w-full">
                <span className="font-medium">github.com/</span>
                <input
                  placeholder="your-username"
                  className="flex-1 w-full outline-none bg-white"
                  {...register('githubUser')}
                />
              </div>

              <Button className="w-fit px-4" type="submit" variant="secondary">
                {!connectionSuccess ? (
                  <>
                    <span className="hidden md:block">Connect</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  <Check />
                )}
              </Button>
            </div>
            {errors.githubUser?.message && (
              <FieldError errorMessage={errors.githubUser.message} />
            )}
          </div>

          <div className="flex flex-col w-full gap-1">
            <Button size="form" type="submit" className="w-full">
              <span>Next step</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            {formSubmitErrors && <FieldError errorMessage={formSubmitErrors} />}
          </div>
        </div>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
