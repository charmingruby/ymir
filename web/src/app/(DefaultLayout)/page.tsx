'use client'

import {
  SiNodedotjs,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si'
import { HiOutlineBookOpen, HiPlusSm } from 'react-icons/hi'
import { Button } from '@/components/shared/button'
import { ContentContainer } from '@/components/shared/content-container'
import { TypingServiceMotivations } from '@/components/pages/home/hero/typing-service-motivations'

export default function Home() {
  return (
    <div>
      <section className="h-screen w-full border-b-2 border-gray-600 pt-16">
        <ContentContainer>
          {/* Hero Container */}
          <div className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-24">
            {/* Tagline */}
            <div className="mb-16 flex w-full flex-col items-center justify-center gap-y-3.5">
              <p className="my-0 pb-2 font-alt text-6xl">
                Development assistence that
              </p>

              <TypingServiceMotivations />
            </div>

            {/* Description */}
            <div className="flex w-full flex-col gap-8">
              <div>
                <h2 className="text-center text-lg font-medium leading-relaxed text-gray-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  ullam provident officia voluptatibus quos quo, odit beatae
                  nemo sit. Blanditiis pariatur cupiditate iure! Doloremque
                  aperiam quo minus doloribus. Dolorum, optio.
                </h2>
              </div>

              <div className="mb-4 flex w-full justify-center gap-4">
                <Button className="p-5 text-base">Start your app</Button>
                <Button className="p-5 text-base" variant="uncolored">
                  <div className="flex items-center">
                    <span className="mr-1">Documentation</span>
                    <HiOutlineBookOpen />
                  </div>
                </Button>
              </div>

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

      <section className="min-h-screen w-full bg-gray-800 pt-16">
        <div className="mx-auto my-0 flex w-full max-w-6xl flex-col justify-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          adipisci nisi, quia ad placeat at assumenda, ipsam fuga architecto
          deserunt impedit blanditiis neque quis est totam inventore hic
          dolores. Totam.
        </div>
      </section>
    </div>
  )
}
