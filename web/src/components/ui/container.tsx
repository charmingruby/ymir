import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const container = tv({
  base: 'mx-auto my-0 flex w-full flex-col overflow-hidden px-4 md:px-8',
  variants: {
    size: {
      default: 'max-w-7xl',
      lg: 'max-w-[90rem]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

type ContainerProps = VariantProps<typeof container> & {
  children: ReactNode
  className?: string
}

export function Container({ children, className, size }: ContainerProps) {
  return (
    <div
      className={container({
        size,
        class: className,
      })}
    >
      {children}
    </div>
  )
}
