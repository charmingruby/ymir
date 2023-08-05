import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const container = tv({
  base: 'mx-auto my-0 flex w-full flex-col overflow-hidden px-4 md:px-8',
  variants: {
    size: {
      default: 'max-w-7xl',
      lg: 'max-w-[90rem]',
    },
    spacing: {
      default: 'py-8 lg:py-16',
      topPage: 'pb-16 pt-28',
      spaceless: 'py-0',
    },
  },
  defaultVariants: {
    size: 'default',
    spacing: 'default',
  },
})

type ContainerProps = VariantProps<typeof container> & {
  children: ReactNode
  className?: string
}

export function Container({
  children,
  className,
  size,
  spacing,
}: ContainerProps) {
  return (
    <div
      className={container({
        size,
        spacing,
        class: className,
      })}
    >
      {children}
    </div>
  )
}
