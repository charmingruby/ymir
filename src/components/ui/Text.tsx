import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  base: 'leading-relaxed',
  variants: {
    color: {
      default: 'text-gray-800',
      onDarkColor: 'text-gray-100',
      lowOpacity: 'text-gray-500',
      observation: 'text-gray-300',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'default',
  },
})

type BoxProps = VariantProps<typeof text> & {
  children: ReactNode
  className?: string
}

export function Text({ children, className, size, color }: BoxProps) {
  return (
    <div
      className={text({
        color,
        size,
        class: className,
      })}
    >
      {children}
    </div>
  )
}
