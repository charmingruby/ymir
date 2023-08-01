import { LuGithub, LuLinkedin } from 'react-icons/lu'
import { SocialLinkItem } from './social-link-item'

export function SocialLinkList() {
  return (
    <div className="flex gap-4">
      <SocialLinkItem icon={LuGithub} url="https://github.com/charmingruby" />
      <SocialLinkItem
        icon={LuLinkedin}
        url="https://www.linkedin.com/in/gustavo-dias21/"
      />
    </div>
  )
}
