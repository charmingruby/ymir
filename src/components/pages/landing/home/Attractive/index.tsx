import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import codingImage from '@/assets/images/code-typing.svg'
import { TechnologyList } from './TechnologyList'
import { Separator } from '@/components/ui/Separator'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'

export function Attractive() {
  return (
    <Container className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <div className="flex flex-col">
          <SectionDescriptor text="use what do you prefer" />

          <div className="space-y-4">
            <SectionTitle title="Technology Independent" dark />
            <Text>
              The application is technology-agnostic, offering independence to
              users, allowing them to choose their preferred technology stack
              without any constraints.
            </Text>
          </div>
        </div>

        <TechnologyList />

        <Separator />

        <div className="mt-6 space-y-4">
          <Text>
            But if needed, we can help you to choose the app lang with{' '}
            <span className="text-success-300 font-semibold">pros </span> and{' '}
            <span className="text-danger-300 font-semibold">cons </span> for
            some apps.
          </Text>

          <Button>
            <span>Check solutions</span>
            <ArrowRight size={16} />
          </Button>
        </div>

        <div />
      </div>

      <div className="hidden md:flex items-center justify-center">
        <Image src={codingImage} alt="developing image" />
      </div>
    </Container>
  )
}
