'use client'

import * as AuthForm from '../../components/auth-form'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import { FieldError } from '@/components/ui/form/field-error'
import { ArrowRight, Github } from 'lucide-react'
import { useGithubController } from './useGithubController'
import { Box } from '@/components/ui/box'

export default function Medias() {
  const [formSubmitErrors, setFormSubmitErrors] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { totalSteps } = useGithubController()

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
      <AuthForm.Form className="flex  w-full flex-col gap-4">
        <div className="flex flex-col gap-8 mt-2">
          <Box
            color="light"
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-primary-300 rounded-md border-2 border-primary-50">
                <Github className="h-4 w-4 text-gray-50" />
              </div>
              <span className="font-medium">Github</span>
            </div>
            <Button variant="secondary" className="flex flex-row items-center">
              <strong className="font-semibold text-sm">Connect</strong>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Box>

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
