import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

export function Text({ children }: TextProps) {
  return <p className="w-full text-lg leading-relaxed">{children}</p>
}
