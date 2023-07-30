import { Descriptor } from '@/components/descriptor'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { LuArrowRight } from 'react-icons/lu'

export function Presentation() {
  return (
    <div className="flex flex-col justify-center gap-6">
      <Descriptor content="Developer friendly features" />
      <Title content="Streamlined development features" />
      <div className="flex items-center justify-center">
        <Text>
          Discover the strength of our feature-rich application that enables
          efficient project management and seamless scalability. Boost
          productivity, enhance collaboration, and achieve organizational
          excellence with our powerful tools and functionalities.
        </Text>
      </div>

      <Button className="gap-2 px-8 lg:self-start" color="primary">
        <span className="text-base">Read more</span>
        <LuArrowRight />
      </Button>
    </div>
  )
}
