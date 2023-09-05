import { SectionDescriptor } from '@/components/section-descriptor'
import { SectionTitle } from '@/components/section-title'
import continuousDevelopmentIllustration from '@/assets/images/continuous-development.svg'
import exploringIllustration from '@/assets/images/exploring.svg'
import { Text } from '@/components/ui/text'
import Image from 'next/image'

export function Highlights() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <SectionDescriptor text="Constant updates" />
          <SectionTitle title="Always improving the platform" dark />
          <Text className="mt-4">
            We{"'"}re committed to continuous improvement, and our platform is
            regularly updated with exciting new features and enhancements.
          </Text>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={continuousDevelopmentIllustration}
            alt="Continuous development illustration"
            className="h-[400px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <Image
            src={exploringIllustration}
            alt="Continuous development illustration"
            className="h-[400px]"
          />
        </div>
        <div className="flex flex-col justify-center -order-last md:order-last">
          <SectionDescriptor text="Unveiling Our Platform's Hidden Treasures" />
          <SectionTitle title="Your path to limitless potential" dark />
          <Text className="mt-4">
            Uncover the full potential of your projects by exploring our
            platform. Discover new features, tools, and possibilities that will
            empower you to achieve more.
          </Text>
        </div>
      </div>
    </>
  )
}
