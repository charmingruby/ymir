import { SocialLinkItem } from './SocialLinkItem'
import { Github, Linkedin } from 'lucide-react'

export function SocialLinkList() {
  return (
    <div className="flex gap-4">
      <SocialLinkItem icon={Github} url="https://github.com/charmingruby" />
      <SocialLinkItem
        icon={Linkedin}
        url="https://www.linkedin.com/in/gustavo-dias21/"
      />
    </div>
  )
}
