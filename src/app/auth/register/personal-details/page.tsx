import * as Input from '@/components/ui/Form/Input'
import * as AuthForm from '@/components/shared/AuthForm'
import { NextStepButton } from '@/components/shared/NextStepButton'

export default function PersonalDetailsForm() {
  return (
    <AuthForm.Root
      title="Create a new account"
      description="at the speeed of thought"
      multistep={{
        currentStep: 1,
        totalSteps: 4,
      }}
    >
      <AuthForm.Form className="flex  w-full flex-col gap-4">
        <div className="w-full grid gap-2 grid-cols-2">
          <Input.Root>
            <Input.Control type="text" placeholder="Name" />
          </Input.Root>

          <Input.Root>
            <Input.Control type="text" placeholder="Last Name" />
          </Input.Root>
        </div>

        <Input.Root>
          <Input.Control type="email" placeholder="E-mail" />
        </Input.Root>

        <NextStepButton url="/" />
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
