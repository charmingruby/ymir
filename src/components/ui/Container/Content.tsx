import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const content = tv({
  base: 'mx-auto my-0 flex w-full flex-col overflow-hidden px-6 md:px-8',
  variants: {
    size: {
      default: 'max-w-7xl',
      lg: 'max-w-[90rem]',
    },
    spacing: {
      default: 'py-8 lg:py-10',
      topPage: 'pb-8 pt-20',
      spaceless: 'py-0',
    },
  },
  defaultVariants: {
    size: 'default',
    spacing: 'default',
  },
})

type ContentProps = VariantProps<typeof content> & {
  children: ReactNode
  className?: string
}

export function Content({ children, className, size, spacing }: ContentProps) {
  return (
    <div
      className={content({
        size,
        spacing,
        class: className,
      })}
    >
      {children}
    </div>
  )
}
