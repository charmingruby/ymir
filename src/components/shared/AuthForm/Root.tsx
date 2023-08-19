import { Multistep } from '@/components/ui/Form/Multistep'
import { Box } from '@/components/ui/Box'
import { ReactNode } from 'react'
import { StepDescription } from '../StepDescription'

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
      <div className="px-4 flex flex-col gap-8 mb-6">
        <StepDescription title={title} description={description} />

        {multistep && (
          <Multistep
            currentStep={multistep.currentStep}
            size={multistep.totalSteps}
          />
        )}
      </div>

      <Box spacing="spaceless" color="light" className="px-4 py-8">
        {children}
      </Box>
    </section>
  )
}
