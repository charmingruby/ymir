import { LogoIcon } from './logo-icon'
import { SocialLinkList } from './social-link-list'

export function SocialMedias() {
  return (
    <div className="flex flex-col justify-start gap-8 md:flex-row md:items-center">
      <LogoIcon />

      {/* Social medias */}
      <div>
        {/* Heading */}
        <h3 className="mb-1.5 font-medium">Stay updated</h3>

        {/* Phrase */}
        <p className="mb-4 text-sm text-gray-300">
          Follow us on our social medias for news and updates.
        </p>

        <SocialLinkList />
      </div>
    </div>
  )
}
