import { heroContent } from '../../contents/hero'
import { TypingServiceMotivations } from './typing-service-motivations'

export function HeroTitle() {
  return (
    <div className="mb-16 flex w-full flex-col items-center justify-center gap-y-3.5">
      <p className="my-0 pb-2 text-center font-alt text-4xl text-gray-50 sm:text-6xl">
        {heroContent.title.static}
      </p>
      <TypingServiceMotivations />
    </div>
  )
}
