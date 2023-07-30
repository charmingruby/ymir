import { Container } from '@/components/ui/container'
import { FeatureList } from './feature-list'
import { Presentation } from './presentation'
import Image from 'next/image'
import supportImage from '@/assets/images/support.svg'

export function Features() {
  return (
    <div className="flex items-center justify-center border-b border-gray-600 bg-gray-900 py-12 ">
      <Container>
        <div className="flex flex-col gap-8 lg:gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <div className="hidden lg:flex">
              <Image src={supportImage} alt="coding illustration" />
            </div>
            <Presentation />
          </div>
          <FeatureList />
        </div>
      </Container>
    </div>
  )
}
