interface StepProps {
  active: boolean
}

export function Step({ active }: StepProps) {
  return (
    <>
      {active ? (
        <div className="h-1 bg-primary-300 w-full rounded-md" />
      ) : (
        <div className="h-1 bg-gray-400 w-full rounded-md" />
      )}
    </>
  )
}
