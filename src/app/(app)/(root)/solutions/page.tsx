import { SectionDescriptor } from '@/components/section-descriptor'
import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import solvingPuzzle from '@/assets/images/solving-puzzle.svg'
import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { ArrowRight, Flame } from 'lucide-react'
import Image from 'next/image'
import { FeatureList } from './components/feature-list'
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
                  Turbocharge your projects with our expertly crafted
                  developer-ready templates. Whether you{"'"}re a seasoned pro
                  or just starting, our extensive collection accelerates your
                  work while ensuring top-quality results.
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
      <Container.Root>
        <Container.Content className="flex w-full text-center items-center gap-8 flex-col">
          <Box className="bg-primary-100 border-none w-full py-8">
            <div className="flex flex-col gap-4 items-center max-w-2xl mx-auto">
              <Flame className="text-white h-10 w-10" />
              <SectionTitle title="Blazing features" />
              <Text variant="white">
                Dive into a world of innovative features designed to streamline
                your workflow, boost productivity, and transform the way you do
                business. Explore the possibilities and unlock your full
                potential with our software.
              </Text>
            </div>
          </Box>
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
                Each element is dedicated to streamlining your workflow,
                ensuring efficiency at every turn.
              </Text>
            </div>
          </div>

          <FeatureList />
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
              We welcome your feature ideas! Share your suggestions with us, and
              together, we{"'"}ll make our app even better.
            </Text>
            <Link href="/contact" prefetch={false}>
              <Button variant="light">Contact</Button>
            </Link>
          </Box>
        </Container.Content>
      </Container.Root>

      {/* Highlights */}
      <Container.Root>
        <Container.Content spacing="aboveCTA" className="flex flex-col gap-32">
          <Highlights />
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <Container.Root>
        <Container.Content className="flex flex-col justify-center items-center gap-8 lg:py-24">
          <div className="flex flex-col text-4xl sm:text-5xl text-center">
            <strong>Enjoy our platform</strong>
          </div>
          <Text className="max-w-2xl text-center">
            Join our vibrant developer platform today and unlock endless
            possibilities! Dive into a world of innovation, collaboration, and
            creativity as you bring your ideas to life. Embrace the future of
            technology and experience the thrill of coding, building, and
            sharing with our thriving community.
          </Text>

          <div className="w-full flex justify-center">
            <Button>Start now</Button>
          </div>
        </Container.Content>
      </Container.Root>
    </>
  )
}
