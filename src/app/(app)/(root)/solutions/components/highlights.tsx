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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            enim neque fuga voluptates ut amet ratione ipsam corrupti
            consequatur, ducimus nobis praesentium corporis vel, provident rem
            magnam quod ipsum? Adipisci.
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
          <SectionDescriptor text="Constant updates" />
          <SectionTitle title="Always improving the platform" dark />
          <Text className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            enim neque fuga voluptates ut amet ratione ipsam corrupti
            consequatur, ducimus nobis praesentium corporis vel, provident rem
            magnam quod ipsum? Adipisci.
          </Text>
        </div>
      </div>
    </>
  )
}