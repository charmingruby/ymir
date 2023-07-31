import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center lg:self-start gap-1 justify-center rounded-sm px-3 text-base font-semibold transition-colors',
  variants: {
    size: {
      default: 'py-2',
      sm: 'py-1',
    },
    color: {
      primary:
        'shadow-md border border-primary-300 bg-primary-300 text-gray-700 transition-colors hover:border-primary-100 hover:bg-primary-100',
      secondary:
        'shadow-md border border-primary-300 text-gray-50 transition-colors hover:bg-primary-300 hover:text-gray-700',
      uncolored:
        'shadow-md border border-gray-300 bg-gray-500 text-gray-50 transition-colors hover:bg-gray-400',
      transparent:
        'text-gray-50 transition-colors hover:bg-gray-600 hover:text-green-300',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    children: ReactNode
    className?: string
  }

export function Button({
  children,
  size,
  color,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ color, size, class: className })} {...props}>
      {children}
    </button>
  )
}
