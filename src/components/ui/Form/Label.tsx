import { ComponentProps } from 'react'

type LabelProps = ComponentProps<'label'> & {
  text: string
  requiredInput?: boolean
}

export function Label({ requiredInput = true, text, ...props }: LabelProps) {
  return (
    <label {...props} className="text-sm">
      <span className="text-gray-400 font-medium">{text}</span>
      {requiredInput && <span className="text-primary-300">*</span>}
    </label>
  )
}
