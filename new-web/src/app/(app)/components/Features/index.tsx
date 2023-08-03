import { Container } from '@/components/ui/Container'
import developingImage from '@/assets/images/support.svg'
import Image from 'next/image'
import { SectionDescriptor } from '@/components/SectionDescriptor'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { FeatureList } from './FeatureList'

export function Features() {
  return (
    <div className="bg-gray-900">
      <Container>
        <div className="grid lg:grid-cols-2">
          <div className="hidden lg:block">
            <Image src={developingImage} alt="Developer working" />
          </div>

          <div className="flex flex-col justify-center">
            <SectionDescriptor text="developer friendly features" />
            <div className="space-y-4">
              <h2 className="font-semibold lg:text-5xl text-4xl">
                Streamlined development features
              </h2>
              <Text size="lg">
                Discover the strength of our feature-rich application that
                enables efficient project management and seamless scalability.
                Boost productivity, enhance collaboration, and achieve
                organizational excellence with our powerful tools and
                functionalities.
              </Text>
              <Button>
                <span className="font-semibold">Check all</span>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={3} />
              </Button>
            </div>
          </div>
        </div>

        <FeatureList />
      </Container>
    </div>
  )
}
