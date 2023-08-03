import { ComponentProps } from 'react'

type TagProps = ComponentProps<'div'>

export function Tag(props: TagProps) {
  return (
    <div
      className="rounded-full bg-primary-100/40 text-primary-600 py-1 px-2 text-sm"
      {...props}
    />
  )
}
