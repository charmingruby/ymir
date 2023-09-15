'use client'

import * as AuthForm from '../../components/auth-form'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { useGithubController } from './useGithubController'
import { FieldError } from '@/components/ui/form/field-error'
import Link from 'next/link'

export default function ConnectGithub() {
  const {
    totalSteps,
    handleSubmit,
    register,
    formSubmitErrors,
    errors,
    connectionSuccess,
    isNextStepButtonDisabled,
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

              <Button
                className={`w-fit px-4
                ${
                  connectionSuccess &&
                  'hover:bg-primary-300 bg-primary-300 text-gray-50 cursor-default'
                }
                `}
                type={connectionSuccess ? 'button' : 'submit'}
                variant="secondary"
              >
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
            {connectionSuccess ? (
              <Link
                href="/register/profile"
                prefetch={false}
                className="w-full"
              >
                <Button
                  size="form"
                  type={connectionSuccess ? 'button' : 'submit'}
                  className="md:w-full"
                  disabled={isNextStepButtonDisabled}
                >
                  <span>Next step</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button
                size="form"
                type={connectionSuccess ? 'button' : 'submit'}
                className="w-full"
                disabled={isNextStepButtonDisabled}
              >
                <span>Next step</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            {formSubmitErrors && <FieldError errorMessage={formSubmitErrors} />}
          </div>
        </div>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
