import { Separator } from '@/components/ui/separator'
import { BrandPresentation } from './brand-presentation'
import { InternalLinkList } from './internal-link-list'
import { SocialMedias } from './social-medias'

export function TopFooter() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Left */}
      <div>
        <BrandPresentation />
        <InternalLinkList />
      </div>

      <div className="w-full md:hidden">
        <Separator />
      </div>

      {/* Right */}
      <div className="flex items-start md:justify-end">
        <SocialMedias />
      </div>
    </div>
  )
}
