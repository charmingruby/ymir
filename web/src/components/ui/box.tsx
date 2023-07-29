import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const box = tv({
  base: 'rounded-md border border-gray-500 shadow-lg transition-shadow hover:shadow-lg',
  variants: {
    spacing: {
      default: 'p-4',
      larger: 'p-8',
      icon: 'h-12 w-12 flex items-center justify-center',
      spaceless: 'p-0',
    },
    color: {
      default: 'bg-gray-700',
      transparent: 'bg-none',
    },
  },
  defaultVariants: {
    spacing: 'default',
    color: 'default',
  },
})

type BoxProps = VariantProps<typeof box> & {
  children: ReactNode
  className?: string
}

export function Box({ children, className, spacing, color }: BoxProps) {
  return (
    <div
      className={box({
        spacing,
        color,
        class: className,
      })}
    >
      {children}
    </div>
  )
}
