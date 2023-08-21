import { ComponentProps } from 'react'

type ControlProps = ComponentProps<'textarea'>

export function Control(props: ControlProps) {
  return (
    <textarea
      className="resize-none w-full bg-white h-24 p-4 outline-none box-border border-gray-100 focus:border-primary-300 transition-colors border rounded-md placeholder-gray-200"
      {...props}
    />
  )
}
