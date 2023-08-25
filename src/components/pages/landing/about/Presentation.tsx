import { SectionTitle } from '@/components/shared/SectionTitle'
import { Box } from '@/components/ui/Box'
import { Text } from '@/components/ui/Text'
import { Code2, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import ideaLogo from '@/assets/images/ideas.svg'
import * as Container from '@/components/ui/Container'

export function Presentation() {
  return (
    <Container.Root className="md:min-h-screen flex items-center justify-center">
      <Container.Content spacing="topPage">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hidden md:flex">
            <Image src={ideaLogo} alt="Brainstorm illustration" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex gap-4 items-center mb-8 md:mb-16">
              <Box
                spacing="icon"
                className="h-16 w-16 bg-primary-300 border-none"
              >
                <Code2 className="h-10 w-10 text-gray-50" />
              </Box>

              <div className="flex flex-col gap-1 text-2xl">
                <span className="leading-none text">We are a</span>
                <strong className="leading-none">Devs platform</strong>
              </div>
            </div>

            <div className=" mb-12">
              <div className=" mb-8">
                <SectionTitle title="We assist devs" dark />
                <strong className="text-4xl sm:text-5xl font-semibold text-primary-gradient ">
                  as like us
                </strong>
              </div>

              <Text variant="default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsum et labore molestias recusandae, nemo natus non accusantium
                accusamus qui culpa earum quasi veritatis repellat eligendi ab
                reprehenderit aperiam voluptate.
              </Text>
            </div>

            <div className="flex gap-4 items-center">
              <ArrowDown className="text-primary-300" />
              <span className="font-medium">Learn more</span>
            </div>
          </div>
        </section>
      </Container.Content>
    </Container.Root>
  )
}