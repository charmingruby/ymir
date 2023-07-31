import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const box = tv({
  base: 'rounded-sm border border-gray-500 shadow-sm transition-shadow transition-all group text-base',
  variants: {
    spacing: {
      default: 'p-4',
      larger: 'p-8',
      icon: 'h-12 w-12 flex items-center justify-center',
      spaceless: 'p-0',
    },
    animation: {
      default: '',
      hover: 'hover:shadow-lg hover:bg-gray-600 cursor-pointer',
    },
    color: {
      default: 'bg-gray-700',
      transparent: 'bg-none',
    },
  },
  defaultVariants: {
    spacing: 'default',
    color: 'default',
    animation: 'default',
  },
})

type BoxProps = VariantProps<typeof box> & {
  children: ReactNode
  className?: string
}

export function Box({
  children,
  className,
  spacing,
  color,
  animation,
}: BoxProps) {
  return (
    <div
      className={box({
        spacing,
        color,
        animation,
        class: className,
      })}
    >
      {children}
    </div>
  )
}
