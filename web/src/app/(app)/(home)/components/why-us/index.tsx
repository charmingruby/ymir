import { Container } from '@/components/ui/container'
import Image from 'next/image'
import codeTyping from '@/assets/images/code-typing.svg'
import { Presentation } from './presentation'
import { AdvantageList } from './advantage-list'
import { HighlightedTopic } from './highlighted-topic'

export function WhyUs() {
  return (
    <section className="flex min-h-screen w-full items-center border-y border-gray-600 bg-gray-900 py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Image
            src={codeTyping}
            alt="developer typing"
            width={480}
            className="hidden md:block"
          />
          <div>
            <Presentation />
            <AdvantageList />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <HighlightedTopic />
          <HighlightedTopic />
        </div>
      </Container>
    </section>
  )
}
