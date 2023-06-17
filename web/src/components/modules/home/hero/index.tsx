import { Button } from '@/components/shared/button'
import { ContentContainer } from '@/components/shared/content-container'
import { HiOutlineBookOpen, HiPlusSm } from 'react-icons/hi'
import {
  SiNodedotjs,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si'
import { TypingServiceMotivations } from './components/typing-service-motivations'

export function HomeHero() {
  return (
    <section className="min-h-screen w-full pt-16">
      <ContentContainer>
        {/* Hero Container */}
        <div className="mx-auto max-w-4xl py-12  md:py-24">
          {/* Tagline */}
          <div className="mb-16 flex w-full flex-col items-center justify-center gap-y-3.5">
            <p className="my-0 pb-2 font-alt text-6xl text-gray-50">
              Development assistence that
            </p>
            <TypingServiceMotivations />
          </div>

          <div className="flex w-full flex-col gap-8">
            {/* Description */}
            <div>
              <p className="text-center text-lg leading-relaxed text-gray-100">
                Ymir unlocks a new level of{' '}
                <span className="font-bold text-gray-50">
                  Software Development Experience
                </span>{' '}
                by working working in each piece of an app, since the business
                rules to database modeling, all of this been friendly for
                developers teams and organizations.
              </p>
            </div>

            {/* Buttons */}
            <div className="mb-4 flex w-full flex-col justify-center gap-4 sm:flex-row">
              <Button className="px-8">
                <span className="text-base">Start your app</span>
              </Button>
              <Button className="px-8" variant="uncolored">
                <div className="flex items-center">
                  <span className="mr-1 text-base">Documentation</span>
                  <HiOutlineBookOpen />
                </div>
              </Button>
            </div>

            {/* Arguments */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-300">Independent of Frameworks</p>
              <div className="flex items-center gap-2 text-xl text-gray-300">
                <SiNodedotjs />
                <SiNestjs />
                <SiNextdotjs />
                <SiTypescript />
                <HiPlusSm />
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
