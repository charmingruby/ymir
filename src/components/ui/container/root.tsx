import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  variants: {
    backgroundColor: {
      default: 'bg-gray-50',
      dark: 'bg-gray-900-gradient',
      white: 'bg-white',
      blueGradient: 'bg-primary-gradient',
    },
  },
  defaultVariants: {
    backgroundColor: 'default',
  },
})

type RootProps = ComponentProps<'div'> & VariantProps<typeof root>

export function Root({ backgroundColor, ...props }: RootProps) {
  return (
    <div
      className={root({
        backgroundColor,
      })}
      {...props}
    />
  )
}
