import { HeroArguments } from './arguments'
import { Container } from '@/components/ui/container'
import { HeroButtonsGroup } from './buttons-group'
import { HeroDescription } from './description'
import { HeroTitle } from './title'

export function Hero() {
  return (
    <section className="mt-16 flex  h-screen w-full items-center justify-center">
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
