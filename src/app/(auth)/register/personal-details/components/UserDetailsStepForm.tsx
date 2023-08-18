import * as Input from '@/components/ui/Form/Input'
import { Multistep } from '@/components/ui/Form/Multistep'
import { Box } from '@/components/ui/Box'
import { StepDescription } from '../../../../../components/shared/StepDescription'
import { NextStepButton } from '../../../../../components/shared/NextStepButton'

export function UserDetailsStepForm() {
  return (
    <section className="space-y-4">
      <div className="px-4 flex flex-col gap-8 mb-6">
        <StepDescription
          title="Create a new account"
          description="at the speeed of thought"
        />

        <Multistep currentStep={1} size={4} />
      </div>

      <Box spacing="spaceless" color="light">
        <form className="px-4 py-8 flex flex-col gap-6">
          <div className="flex  w-full flex-col gap-4">
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
          </div>

          <NextStepButton url="/" />
        </form>
      </Box>
    </section>
  )
}
