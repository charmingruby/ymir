import { ReactNode } from 'react'
import { StepDescription } from '@/components/step-description'
import { Multistep } from '@/components/ui/form/multi-step'
import { Box } from '@/components/ui/box'

interface MultiStep {
  totalSteps: number
  currentStep: number
}

interface AuthFormRootProps {
  title: string
  description: string
  multistep?: MultiStep
  children: ReactNode
}

export function Root({
  title,
  description,
  multistep,
  children,
}: AuthFormRootProps) {
  return (
    <section className="space-y-4">
      <div className="px-4 flex flex-col gap-2 mb-4">
        <StepDescription title={title} description={description} />

        {multistep && (
          <Multistep
            currentStep={multistep.currentStep}
            size={multistep.totalSteps}
          />
        )}
      </div>

      <Box spacing="spaceless" color="light" className="px-8 py-6">
        {children}
      </Box>
    </section>
  )
}
