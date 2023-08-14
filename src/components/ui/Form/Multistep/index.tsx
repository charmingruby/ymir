import { Step } from './Step'

interface MultistepProps {
  size: number
  currentStep: number
}

export function Multistep({ currentStep, size }: MultistepProps) {
  return (
    <div className="w-full">
      <div className="text-sm text-gray-100  font-medium mb-2">
        Step {currentStep} of {size}
      </div>
      <div className="w-full flex gap-2">
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={step <= currentStep} />
        ))}
      </div>
    </div>
  )
}
