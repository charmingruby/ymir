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
        <Container.Content spacing="spaceless" className="py-16 md:py-24">
          {/* Header */}
          <div className="flex flex-col">
            <SectionDescriptor text="From dev to dev" />
            <div className="flex flex-col gap-4">
              <SectionTitle title="We provide the resolutions of devs" dark />
              <Text>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit eum tempore temporibus eaque iusto velit beatae
                perferendis voluptate, aperiam numquam, nostrum ea
                exercitationem corrupti expedita deleniti consectetur
                dignissimos nihil excepturi!
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
        <Container.Content className="grid grid-cols md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <SectionDescriptor text="Interested?" />
            <SectionTitle title="Have a free trial before start" dark />
            <div className="mt-8 space-y-4">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                voluptate eveniet, consectetur eos omnis iusto temporibus,
                aliquam enim cum voluptatibus voluptatem obcaecati in ipsam
                reprehenderit harum dicta amet. Reiciendis, odit?
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
    </section>
  )
}
