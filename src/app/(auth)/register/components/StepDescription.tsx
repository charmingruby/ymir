interface StepDescriptionProps {
  title: string
  description: string
}

export function StepDescription({ title, description }: StepDescriptionProps) {
  return (
    <div className="space-y-4  px-4">
      <div className="flex flex-col items-center">
        <strong className="block text-2xl">{title}</strong>
        <span className="text-gray-400 text-sm">{description}</span>
      </div>
    </div>
  )
}
