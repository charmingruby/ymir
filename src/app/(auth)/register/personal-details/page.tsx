import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { NextStepButton } from '@/components/next-step-button'
import { Label } from '@/components/ui/form/label'

export default function PersonalDetailsForm() {
  return (
    <AuthForm.Root
      title="Create a new account"
      description="at the speeed of thought"
      multistep={{
        currentStep: 2,
        totalSteps: 4,
      }}
    >
      <AuthForm.Form className="flex  w-full flex-col gap-4">
        <div className="w-full grid gap-2 grid-cols-2">
          <Input.Root>
            <Label text="Name" />
            <Input.Control hasError={false} type="text" placeholder="Name" />
          </Input.Root>

          <Input.Root>
            <Label text="Last Name" />
            <Input.Control
              hasError={false}
              type="text"
              placeholder="Last Name"
            />
          </Input.Root>
        </div>

        <Input.Root>
          <Label text="Email" />
          <Input.Control hasError={false} type="email" placeholder="E-mail" />
        </Input.Root>

        <NextStepButton url="/" />
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
