import { ArrowRight, Clock } from 'lucide-react'
import * as Container from '@/components/ui/container'
import { Pin } from '@/components/pin'
import { Text } from '@/components/ui/text'
import { TypingMotivations } from './components/typing-motivations'
import { Button } from '@/components/ui/button'
import { Footnote } from './components/footnote'
import { SectionDescriptor } from '@/components/section-descriptor'
import { SectionTitle } from '@/components/section-title'
import { MissionList } from './components/mission-list'
import { FeatureList } from './components/feature-list'
import Image from 'next/image'
import codingImage from '@/assets/images/code-typing.svg'
import { Separator } from '@/components/ui/separator'
import { TechnologyList } from './components/technology-list'
import { SolutionList } from './components/solution-list'
import { PlanList } from './components/plan-list'

export default function Home() {
  return (
    <section>
      {/* Hero */}
      <Container.Root>
        <Container.Content spacing="topPage" className="min-h-screen">
          <div className="sm:mx-auto sm:max-w-4xl flex-1 flex flex-col justify-center items-center">
            {/* News */}
            <div className="flex w-auto justify-center mb-16">
              <Pin icon={Clock} content="Beta will release soon" />
            </div>

            {/* Presentation */}
            <div className="flex w-full flex-col items-center justify-center gap-y-3.2 mb-12">
              <h1 className="my-0 text-center font-alt font-bold text-4xl sm:text-5xl">
                Build apps with <TypingMotivations />
              </h1>
            </div>

            {/* Explanation */}
            <div className="flex w-full mb-12 flex-col gap-8 max-w-2xl">
              <Text size="lg" className="text-center">
                Ymir unlocks a new level of{' '}
                <span className="font-semibold text-gray-900">
                  Software Development Experience
                </span>{' '}
                by working working in each piece of an app, since the business
                rules to database modeling, all of this been friendly for
                developers teams and organizations.
              </Text>
            </div>

            {/* Button Group */}
            <div className="flex flex-col w-full md:flex-row gap-4 justify-center">
              <Button>Start developing</Button>
              <Button variant="secondary">
                <span>Get an app</span>
              </Button>
            </div>

            <Footnote />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Missions */}
      <Container.Root>
        <Container.Content className="lg:items-center">
          <SectionDescriptor text="bring agility to your apps" />
          <SectionTitle dark title="Build apps with speed and confidence" />
          <div className="max-w-4xl mt-8">
            <Text className="lg:text-center" size="lg">
              The{' '}
              <span className="text-gray-950 font-semibold">
                Ymir Development Assistance
              </span>{' '}
              is a direct line to make your applications agile management and
              easiest to development. With our services, we ensure our users
              that:
            </Text>
          </div>

          <MissionList />
        </Container.Content>
      </Container.Root>

      {/* Features */}
      <Container.Root>
        <Container.Content className="grid lg:grid-cols-2 gap-12 grid-cols-1">
          {/* Content */}
          <div className="flex flex-col">
            <SectionDescriptor text="developer friendly features" />
            <div className="space-y-4">
              <SectionTitle dark title="Streamlined development features" />
              <Text size="lg">
                Discover the strength of our feature-rich application that
                enables efficient project management and seamless scalability.
                Boost productivity, enhance collaboration, and achieve
                organizational excellence with our powerful tools and
                functionalities.
              </Text>

              <Button className="lg:self-start">
                <span>View all</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Feature List */}
          <div className="">
            <Text className="text-sm italic mb-4 text-gray-300">
              *Most notable features that saves the paronamic view of
              application.
            </Text>

            <FeatureList />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Solutions */}
      <Container.Root>
        <Container.Content className="pb-16 md:pb-24 pt-16 flex flex-col items-center">
          <div className="flex sm:items-center flex-col">
            <SectionDescriptor text="Solutions ready for you" />

            <div className="sm:text-center gap-4 flex flex-col sm:items-center">
              <SectionTitle title="Products designed for your use" dark />
              <Text className="max-w-2xl sm:text-center">
                We are thrilled to offer not only a developer platform but also
                a variety of pre-made apps just for you. And if you need a
                custom app, we{"'"}ve got you covered!
              </Text>
            </div>
          </div>

          <SolutionList />

          <div className="mt-4 w-full flex justify-center">
            <Button className="w-full">
              <span>View all</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Plans */}
      <Container.Root>
        <Container.Content>
          <div className="flex flex-col lg:items-center mx-auto max-w-2xl">
            <SectionDescriptor text="we make everyone satisfied" />

            <div className="gap-4 flex flex-col lg:text-center">
              <SectionTitle
                title="We are a platform to multiple types of works"
                dark
              />
              <Text>
                Whether you{"'"}re an individual developer, a team, or a
                thriving enterprise, Ymir provides all the essential components
                to craft a website that outshines the competition.
              </Text>
            </div>
          </div>

          <PlanList />
        </Container.Content>
      </Container.Root>

      {/* Attractive */}
      <Container.Root>
        <Container.Content
          spacing="aboveCTA"
          className="grid grid-cols-1 gap-12 md:grid-cols-2"
        >
          {/* Illustration */}
          <div className="hidden md:flex items-center justify-center">
            <Image src={codingImage} alt="developing image" />
          </div>

          {/* Content */}
          <div>
            <div className="flex flex-col">
              <SectionDescriptor text="use what do you prefer" />

              <div className="space-y-4">
                <SectionTitle title="Technology Independent" dark />
                <Text>
                  The application is technology-agnostic, offering independence
                  to users, allowing them to choose their preferred technology
                  stack without any constraints.
                </Text>
              </div>
            </div>

            <TechnologyList />

            <Separator />

            <div className="mt-6 space-y-4">
              <Text>
                But if needed, we can help you to choose the app lang with{' '}
                <span className="text-success-300 font-semibold">pros </span>{' '}
                and <span className="text-danger-300 font-semibold">cons </span>{' '}
                for some apps.
              </Text>

              <Button>
                <span>Check solutions</span>
                <ArrowRight size={16} />
              </Button>
            </div>
            <div />
          </div>
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <Container.Root backgroundColor="blueGradient">
        <Container.Content className="flex flex-col justify-center items-center gap-8 py-16">
          <div className="flex flex-col text-4xl sm:text-5xl text-center text-white">
            <strong>Boost your productivity.</strong>
            <strong>Start using our app today.</strong>
          </div>

          <Text className="max-w-2xl text-center text-gray-50">
            Supercharge your productivity with our app. Start today and unlock a
            new level of efficiency, collaboration, and organization. Experience
            the difference firsthand.
          </Text>

          <div className="w-full flex justify-center">
            <Button variant="light">Start now</Button>
          </div>
        </Container.Content>
      </Container.Root>
    </section>
  )
}
