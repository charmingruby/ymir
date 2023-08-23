import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center shadow-sm w-full md:w-auto gap-2 justify-center rounded-md text-base font-medium transition-colors',
  variants: {
    size: {
      default: 'px-6 py-2 ',
      sm: 'text-base py-1 px-4',
      form: 'h-12 px-4',
    },
    variant: {
      /** #5061fc */
      default:
        'border border-primary-100 bg-primary-300 text-gray-50 transition-colors hover:border-primary-100 hover:bg-primary-100',

      /** #5061fc + #F5F5F5 */
      secondary:
        'border border-primary-300 text-primary-300 transition-colors hover:bg-primary-300 hover:text-gray-50',

      /** #16A394 */
      terciary:
        'border border-terciary-100 bg-terciary-300 text-gray-50 transition-colors hover:bg-terciary-100 hover:text-gray-50',

      /** #18181b */
      dark: 'text-gray-50 border border-gray-600 bg-gray-800 transition-colors hover:bg-gray-600',

      /** #F5F5F5 */

      light: 'bg-gray-50 text-gray-700 transition-colors hover:bg-gray-100',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
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
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ variant, size, class: className })} {...props}>
      {children}
    </button>
  )
}
