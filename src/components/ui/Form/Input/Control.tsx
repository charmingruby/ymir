import { ComponentProps } from 'react'

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      className="w-full bg-white h-12 px-4 outline-none box-border border-gray-100 focus:border-primary-300 transition-colors border rounded-md placeholder-gray-200"
      {...props}
    />
  )
}
