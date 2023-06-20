import { ReactNode } from 'react'

interface ContentSectionExplanationTextProps {
  children: ReactNode
}

export function ContentSectionExplanationText({
  children,
}: ContentSectionExplanationTextProps) {
  return <p className="w-full text-lg leading-relaxed">{children}</p>
}
