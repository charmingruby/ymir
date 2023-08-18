import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import Image from 'next/image'
import freeTrial from '@/assets/images/free-trial.svg'
import { ArrowRight } from 'lucide-react'

export function FreeTrial() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <Container
        spacing="spaceless"
        className="pb-16 grid grid-cols md:grid-cols-2 gap-8"
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
      </Container>
    </section>
  )
}
