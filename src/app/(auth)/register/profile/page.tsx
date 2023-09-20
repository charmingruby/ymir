'use client'

import * as TextArea from '@/components/ui/form/text-area'
import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import { ArrowRight } from 'lucide-react'

export default function ProfileForm() {
  const isButtonDisabled = false

  return (
    <AuthForm.Root
      title="Create a new account"
      description="at the speeed of thought"
      multistep={{
        currentStep: 4,
        totalSteps: 4,
      }}
    >
      <AuthForm.Form className="flex  w-full flex-col gap-4">
        {/* Username */}
        <Input.Root>
          <Input.Control
            hasError={false}
            name="username"
            placeholder="Username"
          />
        </Input.Root>

        {/* Role */}
        <Input.Root>
          <Input.Control hasError={false} name="role" placeholder="Role" />
        </Input.Root>

        {/* Stack */}
        <Input.Root>
          <Input.Control hasError={false} name="stack" placeholder="Stack" />
        </Input.Root>

        {/* Bio */}
        <TextArea.Root>
          <TextArea.Control placeholder="john@doe.com" />
        </TextArea.Root>

        <div className="flex flex-col gap-1 mt-2">
          <Button size="form" type="submit" disabled={isButtonDisabled}>
            {isButtonDisabled ? (
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
