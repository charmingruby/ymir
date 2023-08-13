import { ComponentProps } from 'react'

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      className="w-full bg-gray-900 h-12 px-4 outline-none box-border border-gray-900 focus:border-primary-300 transition-colors border-2 rounded-md"
      {...props}
    />
  )
}
