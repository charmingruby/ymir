import { ComponentProps } from 'react'

type FormProps = ComponentProps<'form'>

export function Form(props: FormProps) {
  return <form className="flex w-full flex-col gap-6" {...props} />
}
