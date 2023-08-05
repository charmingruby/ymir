import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center w-full md:w-auto  gap-2 justify-center rounded-lg text-base font-medium transition-colors',
  variants: {
    size: {
      default: 'px-6 py-3',
      sm: 'h-8 text-sm sm:text-base p-0 px-2 sm:px-4',
    },
    color: {
      primary:
        'shadow-md border border-primary-50 bg-primary-300 text-gray-50 transition-colors hover:border-primary-100 hover:bg-primary-100',
      secondary:
        'shadow-md border border-primary-300 text-gray-50 transition-colors hover:bg-primary-300 hover:text-gray-700',
      uncolored:
        'shadow-md border border-gray-300 bg-gray-500 text-gray-50 transition-colors hover:bg-gray-400',
      dark: 'shadow-sm text-gray-50 border border-gray-600 bg-gray-800 transition-colors hover:bg-gray-600',
      light:
        'shadow-md bg-gray-50 text-gray-700 transition-colors hover:bg-gray-100',
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
