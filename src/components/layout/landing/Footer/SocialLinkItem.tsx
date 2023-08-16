import { ElementType } from 'react'

interface SocialLinkItemProps {
  icon: ElementType
  url: string
}

export function SocialLinkItem({ icon: Icon, url }: SocialLinkItemProps) {
  return (
    <a href={url} className="group">
      <Icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-primary-300" />
    </a>
  )
}
