import { SectionTitle } from '@/components/shared/SectionTitle'
import { Box } from '@/components/ui/Box'
import { Text } from '@/components/ui/Text'
import { Code2, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import ideaLogo from '@/assets/images/ideas.svg'
import { Container } from '@/components/ui/Container'

export function Presentation() {
  return (
    <div className="md:min-h-screen flex items-center justify-center bg-gray-900-gradient ">
      <Container spacing="topPage">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hidden md:flex">
            <Image src={ideaLogo} alt="Brainstorm illustration" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex gap-4 items-center mb-16">
              <Box spacing="icon" className="h-16 w-16">
                <Code2 className="h-10 w-10 text-primary-300" />
              </Box>

              <div className="flex flex-col gap-1 text-2xl">
                <span className="leading-none">We are a</span>
                <strong className="leading-none">Devs platform</strong>
              </div>
            </div>

            <div className=" mb-12">
              <div className=" mb-8">
                <SectionTitle title="We assist devs" />
                <strong className="text-4xl sm:text-5xl font-semibold text-primary-gradient ">
                  as like us
                </strong>
              </div>

              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsum et labore molestias recusandae, nemo natus non accusantium
                accusamus qui culpa earum quasi veritatis repellat eligendi ab
                reprehenderit aperiam voluptate.
              </Text>
            </div>

            <div className="flex gap-4 items-center">
              <ArrowDown className="text-primary-300" />
              <span className="text-gray-50 font-medium">Learn more</span>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
