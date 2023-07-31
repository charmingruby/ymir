import { Container } from '@/components/ui/container'
import { Illustration } from './illustration'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { Descriptor } from '@/components/descriptor'
import { Button } from '@/components/ui/button'
import { LuArrowRight } from 'react-icons/lu'

export function Presentation() {
  return (
    <section className="pt-16">
      <Container>
        <div className="grid grid-cols-2 py-12">
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
              <div className="flex items-center gap-2">
                <span className="text-base">Get services</span>{' '}
                <LuArrowRight size={18} />
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
