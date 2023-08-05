import { ComponentProps } from 'react'

type TagProps = ComponentProps<'div'>

export function Tag(props: TagProps) {
  return (
    <div
      className="rounded-full border border-primary-300 bg-primary-300/10 text-primary-600 py-1 px-3 text-sm"
      {...props}
    />
  )
}
