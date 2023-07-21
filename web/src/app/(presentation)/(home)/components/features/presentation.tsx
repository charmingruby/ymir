import { Descriptor } from '@/components/ui/descriptor'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { FeaturesContent } from '../../contents/features'
import { Button } from '@/components/ui/button'
import { LuArrowRight } from 'react-icons/lu'

export function Presentation() {
  const { descriptor, title, description } = FeaturesContent

  return (
    <div className="flex flex-col gap-6 lg:max-w-lg">
      <Descriptor content={descriptor} />
      <Title content={title} />
      <div className="flex items-center justify-center">
        <Text>{description}</Text>
      </div>

      <Button className="gap-2 px-8 lg:self-start" variant="secondary">
        <span className="text-base">Read more</span>
        <LuArrowRight />
      </Button>
    </div>
  )
}
