import { Descriptor } from '@/components/shared/Descriptor'
import { Title } from '@/components/shared/Title'
import { Text } from '@/components/shared/Text'

export function Apresentation() {
  return (
    <div className="mb-12 flex flex-col gap-6">
      <Descriptor content="Most notable features" />
      <Title content="Streamlined development features" />
      <div className="flex items-center justify-center">
        <Text>
          Discover the Power of Our Application&apos;s Top Features, Ensuring
          Scalability and Organizational Excellence. With our robust feature
          set, you can efficiently manage and scale your projects while
          maintaining a well-organized development process. Boost productivity,
          enhance collaboration, and achieve seamless scalability with our
          powerful tools and functionalities.
        </Text>
      </div>
    </div>
  )
}
