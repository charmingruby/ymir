import { SectionDescriptor } from '@/components/section-descriptor'
import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import solvingPuzzle from '@/assets/images/solving-puzzle.svg'
import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { ArrowRight, Flame } from 'lucide-react'
import Image from 'next/image'
import { FeatureList } from './components/feature-list'
import { GuaranteeList } from './components/guarantee-list'
import Link from 'next/link'
import { Box } from '@/components/ui/box'
import { Highlights } from './components/highlights'

export default function Features() {
  return (
    <>
      {/* Hero */}
      <Container.Root>
        <Container.Content
          spacing="topPage"
          className="flex flex-row items-center md:min-h-screen"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
            <div className="flex flex-col justify-center">
              <SectionDescriptor text="Customizable projects" />
              <SectionTitle title="We have ready solutions" dark />

              <div className="flex flex-col mt-8">
                <Text variant="lowOpacity">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid odio totam sed, qui ut et reiciendis autem
                  reprehenderit. Quisquam, harum minima iure tempora sed
                  molestiae vero omnis quidem possimus ut.
                </Text>

                <div className="flex gap-12 mt-8">
                  <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-base text-gray-400">Area</p>
                    <span className="text-sm text-gray-300">Interfaces</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-base text-gray-400">Scope</p>
                    <span className="text-sm text-gray-300">
                      Web and Mobile
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button>
                    <span>Access</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden md:block">
              <Image src={solvingPuzzle} alt="People solving a puzzle" />
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Banner */}
      <Container.Root className="bg-primary-gradient">
        <Container.Content className="flex w-full text-center items-center gap-8 flex-col max-w-2xl mx-auto">
          <div className="flex flex-col gap-4 items-center">
            <Flame className="text-white h-10 w-10" />
            <SectionTitle title="Blazing features" />
            <Text variant="white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              laborum iste laudantium adipisci enim, nemo earum illum veritatis
              fugiat doloribus ea accusamus? Aut rerum nesciunt qui optio
              repudiandae eaque dolore?
            </Text>
          </div>
          <Button variant="light">Request demo</Button>
        </Container.Content>
      </Container.Root>

      {/* FeatureList */}
      <Container.Root>
        <Container.Content>
          <div className="flex sm:items-center flex-col">
            <SectionDescriptor text="Dev's time saver" />

            <div className="sm:text-center gap-4 flex flex-col sm:items-center">
              <SectionTitle title="Made for productivity" dark />
              <Text className="max-w-2xl sm:text-center" variant="lowOpacity">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus officia aliquam cum ipsum explicabo, quo excepturi
                alias provident voluptatum nihil nobis debitis ullam veritatis
                ex distinctio quis culpa incidunt ipsam?
              </Text>
            </div>
          </div>

          <FeatureList />
        </Container.Content>
      </Container.Root>

      {/* Guarantees */}
      <Container.Root>
        <Container.Content>
          <div className="flex flex-col mb-12 lg:items-center">
            <SectionDescriptor text="Our Guarantees" />
            <SectionTitle title="We provides with excellence" dark />
          </div>

          <Box color="light" className="p-0">
            <GuaranteeList />
            <div className="border-t border-gray-100 rounded-b-lg px-8 py-4">
              <Link
                href="/contact"
                prefetch={false}
                className="flex gap-2 items-center justify-center text-gray-200 transition-colors hover:text-primary-300"
              >
                <span className="font-medium">Talk with us to get a demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Box>
        </Container.Content>
      </Container.Root>

      {/* Invite */}
      <Container.Root>
        <Container.Content>
          <Box
            className="flex flex-col md:flex-row justify-between gap-6 md:gap-16 items-center px-16 py-8  bg-primary-100"
            spacing="spaceless"
            color="transparent"
          >
            <strong className="text-xl text-gray-50">Request us</strong>
            <Text variant="white" className="flex-1 text-center md:text-start ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              quae quam corporis, facilis quo eum, blanditiis ea, reiciendis
              ducimus voluptate iure corrupti in esse excepturi et. Placeat quo
              nisi quis!
            </Text>
            <Link href="/contact" prefetch={false}>
              <Button variant="light">Contact</Button>
            </Link>
          </Box>
        </Container.Content>
      </Container.Root>

      {/* Highlights */}
      <Container.Root className="">
        <Container.Content className="flex flex-col gap-32">
          <Highlights />
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <Container.Root backgroundColor="blueGradient">
        <Container.Content className="flex flex-col justify-center items-center gap-8 py-16">
          <div className="flex flex-col text-4xl sm:text-5xl text-center text-white">
            <strong>Our solutions</strong>
          </div>

          <Text className="max-w-2xl text-center text-gray-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            beatae. Repellat inventore fuga voluptatibus? Provident nemo ea
            dolorem ipsum sapiente? Esse id exercitationem omnis labore placeat
            officiis! Neque, qui voluptas.
          </Text>

          <div className="w-full flex justify-center">
            <Button variant="light">Check</Button>
          </div>
        </Container.Content>
      </Container.Root>
    </>
  )
}
