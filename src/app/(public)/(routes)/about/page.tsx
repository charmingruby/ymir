import * as Container from '@/components/ui/container'
import Image from 'next/image'
import ideaLogo from '@/assets/images/ideas.svg'
import { Box } from '@/components/ui/box'
import { ArrowDown, ArrowRight, Code2, Users } from 'lucide-react'
import { Text } from '@/components/ui/text'
import { Cycle } from './components/cycle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MemberList } from './components/member-list'
import freeTrial from '@/assets/images/free-trial.svg'
import { SectionDescriptor } from '@/components/section-descriptor'
import { SectionTitle } from '@/components/section-title'

export default function About() {
  return (
    <section>
      {/* Hero */}
      <Container.Root className="md:min-h-screen flex items-center justify-center">
        <Container.Content
          spacing="topPage"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Illustration */}
          <div className="hidden md:flex">
            <Image src={ideaLogo} alt="Brainstorm illustration" />
          </div>

          {/* Content */}
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
                Ymir is your go-to platform for developer success. It
                streamlines project management, fosters collaboration, and
                offers valuable learning resources. With Ymir, your coding
                journey becomes smoother and more efficient.
              </Text>
            </div>

            <div className="flex gap-4 items-center">
              <ArrowDown className="text-primary-300" />
              <span className="font-medium">Learn more</span>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Banner */}
      <Container.Root>
        <Container.Content spacing="spaceless">
          <Box
            className="flex flex-col md:flex-row justify-between gap-6 md:gap-16 items-center px-16 py-8  bg-primary-100"
            spacing="spaceless"
            color="transparent"
          >
            <Text
              variant="white"
              size="lg"
              className="max-w-2xl mx-auto text-center"
            >
              We provide a dedicated space for developers, offering{' '}
              <strong className="font-bold">
                support in project advancement through collaborative resources
              </strong>{' '}
              while promoting continuous learning and career growth.
            </Text>
          </Box>
        </Container.Content>
      </Container.Root>

      {/* Cycle */}
      <Container.Root>
        <Container.Content
          spacing="spaceless"
          className="lg:pt-24 py-8 lg:pb-14"
        >
          {/* Header */}
          <div className="flex flex-col">
            <SectionDescriptor text="From dev to dev" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SectionTitle title="Development cycle" dark />
              <Text variant="lowOpacity">
                We think about helping not only our team, but the entire
                ecosystem of developers.
              </Text>
            </div>
          </div>

          {/* Diagram */}
          <Cycle />
        </Container.Content>
      </Container.Root>

      {/* Team */}
      <Container.Root>
        <Container.Content>
          <div className="flex flex-col items-center">
            <div className="max-w-2xl mb-12">
              <div className="flex flex-col md:items-center justify-center gap-4 mb-4">
                <Users className="h-8 w-8 text-primary-300" />
                <SectionTitle title="Meet the team" dark />
              </div>
              <Text className="md:text-center">
                Meet our extraordinary team of developers. With a wealth of
                expertise, a relentless pursuit of excellence, and a track
                record of delivering exceptional software solutions, we{"'"}re
                here to transform your vision into reality.
              </Text>
            </div>

            <MemberList />

            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 flex w-full justify-center"
            >
              <Button>
                <span>Join us</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Free Trial */}
      <Container.Root>
        <Container.Content
          spacing="spaceless"
          className="grid grid-cols md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col justify-center">
            <SectionDescriptor text="Interested?" />
            <SectionTitle title="Meke your trial" dark />
            <div className="mt-8 flex flex-col gap-8">
              <Text>
                Join us in shaping the future! We invite you to be a part of our
                software testing community. Your valuable feedback will help us
                refine and improve our product, ensuring it meets your needs and
                expectations. Together, we can create a better software
                experience. Become a tester today and make a difference!
              </Text>
              <Link href="/register" prefetch={false}>
                <Button className="">
                  <span>Get started</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
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
    </section>
  )
}
