import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return <div className="flex w-full rounded-md items-center" {...props} />
}
