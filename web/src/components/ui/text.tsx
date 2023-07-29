import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const text = tv({
  base: 'w-full text-lg leading-relaxed',
  variants: {
    color: {
      default: 'text-gray-100',
      lowOpacity: 'text-gray-200',
    },
  },
  defaultVariants: {
    color: 'default',
  },
})

type TextProps = VariantProps<typeof text> & {
  children: ReactNode
  className?: string
}

export function Text({ children, className, color }: TextProps) {
  return (
    <p
      className={text({
        class: className,
        color,
      })}
    >
      {children}
    </p>
  )
}
