interface FieldErrorProps {
  errorMessage: string | undefined
}

export function FieldError({ errorMessage }: FieldErrorProps) {
  return (
    <div className="text-danger-500 text-sm mt-1 font-medium">
      {errorMessage}
    </div>
  )
}
