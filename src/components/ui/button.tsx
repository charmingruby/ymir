import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center shadow-sm w-full md:w-auto gap-2 justify-center rounded-md text-base font-medium transition-colors',
  variants: {
    size: {
      default: 'px-6 py-2 ',
      sm: 'text-base py-1 px-3',
      form: 'h-12 px-4',
    },
    variant: {
      default:
        'border border-primary-100 bg-primary-300 text-gray-50 transition-colors hover:border-primary-100 hover:bg-primary-100',
      secondary:
        'border border-primary-300 text-primary-300 transition-colors hover:bg-primary-300 hover:text-gray-50',
      terciary:
        'border border-terciary-100 bg-terciary-300 text-gray-50 transition-colors hover:bg-terciary-100 hover:text-gray-50',
      dark: 'text-gray-50 border border-gray-600 bg-gray-800 transition-colors hover:bg-gray-600',
      light: 'bg-white text-gray-700 transition-colors hover:bg-gray-100',
      disabled: 'bg-gray-200 text-white cursor-not-allowed',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    disabled?: boolean
    children: ReactNode
    className?: string
  }

export function Button({
  children,
  size,
  variant,
  className,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={button({
        variant: disabled ? 'disabled' : variant,
        size,
        class: className,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
