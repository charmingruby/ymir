import { HeroTitle } from './components/title'
import { HeroDescription } from './components/description'
import { HeroButtonsGroup } from './components/buttons-group'
import { HeroArguments } from './components/arguments'
import { Container } from '@/components/shared/container'

export function Hero() {
  return (
    <section className="flex h-screen  w-full items-center justify-center pt-16">
      <Container>
        {/* Hero Container */}
        <div className="mx-auto max-w-4xl py-12 md:py-24">
          <HeroTitle />

          <div className="flex w-full flex-col gap-8">
            <HeroDescription />
            <HeroButtonsGroup />
            <HeroArguments />
          </div>
        </div>
      </Container>
    </section>
  )
}
