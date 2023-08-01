import { Container } from '@/components/ui/container'
import { Illustration } from './illustration'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { Descriptor } from '@/components/descriptor'
import { Button } from '@/components/ui/button'
import { LuArrowRight } from 'react-icons/lu'

export function Presentation() {
  return (
    <section className="pb-12 pt-24">
      <Container>
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2">
          <Illustration />

          <div className="flex flex-col justify-center gap-6">
            <Descriptor content="Dev Facilities" />
            <Title content="Features that make your development fly" />
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              aperiam, nemo eius quibusdam doloremque eveniet voluptatum ex
              ipsam, quo explicabo officia recusandae ipsa earum blanditiis
              soluta sit natus aliquam animi.
            </Text>

            <Button>
              <span className="text-base">Check prices</span>{' '}
              <LuArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
