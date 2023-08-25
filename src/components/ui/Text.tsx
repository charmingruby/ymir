import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  base: 'leading-relaxed',
  variants: {
    variant: {
      default: 'text-gray-800',
      white: 'text-white',
      lowOpacity: 'text-gray-400',
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

export function Text({ children, className, size, variant }: BoxProps) {
  return (
    <div
      className={text({
        variant,
        size,
        class: className,
      })}
    >
      {children}
    </div>
  )
}
