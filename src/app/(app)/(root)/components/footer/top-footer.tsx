import { Separator } from '@/components/ui/separator'
import { InternalLinkList } from './internal-link-list'
import { SocialMedias } from './social-medias'
import { Text } from '@/components/ui/text'

export function TopFooter() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Left */}
      <div>
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-primary-300">Ymir</h2>
          <Text variant="lowOpacity" size="sm">
            Trust on us and boost your productivity.
          </Text>
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
