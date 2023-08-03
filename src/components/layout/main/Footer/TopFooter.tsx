import { Separator } from '@/components/ui/Separator'
import { InternalLinkList } from './InternalLinkList'
import { SocialMedias } from './SocialMedias'

export function TopFooter() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Left */}
      <div>
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-primary-300">Ymir</h2>
          <h3 className="text-sm text-gray-200">
            Trust on us and boost your productivity.
          </h3>
        </div>
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
