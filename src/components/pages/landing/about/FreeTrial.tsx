import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/Button'
import * as Container from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import Image from 'next/image'
import freeTrial from '@/assets/images/free-trial.svg'
import { ArrowRight } from 'lucide-react'

export function FreeTrial() {
  return (
    <Container.Root>
      <Container.Content
        spacing="spaceless"
        className="grid grid-cols md:grid-cols-2 gap-8 py-8 pb-8"
      >
        <div className="flex flex-col justify-center">
          <SectionDescriptor text="Interested?" />
          <SectionTitle title="Have a free trial before start" dark />
          <div className="mt-8 space-y-4">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptate eveniet, consectetur eos omnis iusto temporibus, aliquam
              enim cum voluptatibus voluptatem obcaecati in ipsam reprehenderit
              harum dicta amet. Reiciendis, odit?
            </Text>
            <Button className="">
              <span>Free test for 2 weeks</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        <div>
          <Image
            src={freeTrial}
            alt="Free trial image"
            className="hidden md:block"
          />
        </div>
      </Container.Content>
    </Container.Root>
  )
}
