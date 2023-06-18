import { ContentContainer } from '@/components/shared/content-container'
import { HeroTitle } from './components/title'
import { HeroDescription } from './components/description'
import { HeroButtonsGroup } from './components/buttons-group'
import { HeroArguments } from './components/arguments'

export function HomeHero() {
  return (
    <section className="min-h-screen w-full pt-16">
      <ContentContainer>
        {/* Hero Container */}
        <div className="mx-auto max-w-4xl py-12  md:py-24">
          <HeroTitle />

          <div className="flex w-full flex-col gap-8">
            <HeroDescription />
            <HeroButtonsGroup />
            <HeroArguments />
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
