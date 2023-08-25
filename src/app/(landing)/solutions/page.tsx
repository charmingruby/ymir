import * as Container from '@/components/ui/Container'
import solvingPuzzle from '@/assets/images/solving-puzzle.svg'
import Image from 'next/image'
import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { SolutionCard } from '@/components/pages/landing/solutions/SolutionCard'
import { Invitation } from '@/components/pages/landing/solutions/Invitation'
import { Box } from '@/components/ui/Box'
import { Guarantee } from '@/components/pages/landing/solutions/Guarantee'
import Link from 'next/link'

export default function Solutions() {
  return (
    <>
      {/* Presentation */}
      <Container.Root>
        <Container.Content
          spacing="topPage"
          className="flex flex-row items-center md:min-h-screen"
        >
          {/* Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <SectionDescriptor text="Customizable projects" />
              <SectionTitle title="We have ready solutions" dark />

              <div className="flex flex-col gap-4 mt-8">
                <Text variant="lowOpacity">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid odio totam sed, qui ut et reiciendis autem
                  reprehenderit. Quisquam, harum minima iure tempora sed
                  molestiae vero omnis quidem possimus ut.
                </Text>

                <div>
                  <Button>
                    <span>Access</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-12 mt-16">
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-base text-gray-400">Area</p>
                  <span className="text-sm text-gray-300">Interfaces</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-base text-gray-400">Scope</p>
                  <span className="text-sm text-gray-300">Web and Mobile</span>
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

      {/* Areas */}
      <Container.Root>
        <Container.Content>
          <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
            <SectionDescriptor text="Includes" />
            <SectionTitle title="Built in solutions" dark />
            <Text className="mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              consectetur ut voluptate dolore repudiandae eaque reiciendis
              officiis esse ipsa, exercitationem quasi tenetur. Sequi similique
              labore enim facere in, obcaecati libero!
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
            <SolutionCard />
            <SolutionCard />
            <SolutionCard />
            <SolutionCard />
            <SolutionCard />
            <SolutionCard />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Request  */}
      <Container.Root>
        <Container.Content>
          <Invitation />
        </Container.Content>
      </Container.Root>

      {/* Our guarantees */}
      <Container.Root>
        <Container.Content>
          <div className="flex flex-col mb-12 items-center">
            <SectionDescriptor text="Our Guarantees" />
            <SectionTitle title="We provides with excellence" dark />
          </div>
          <Box color="light" className="p-0">
            <div className="grid lg:grid-cols-4 gap-4 p-8">
              <Guarantee />
              <Guarantee />
              <Guarantee />
              <Guarantee />
              <Guarantee />
              <Guarantee />
              <Guarantee />
              <Guarantee />
            </div>
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
    </>
  )
}