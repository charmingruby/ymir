import { TypingServiceMotivations } from './TypingServiceMotivations'

export function HeroTitle() {
  return (
    <div className="mb-16 flex w-full flex-col items-center justify-center gap-y-3.5">
      <p className="my-0 pb-2 text-center font-alt text-6xl text-gray-50">
        Development assistence that
      </p>
      <TypingServiceMotivations />
    </div>
  )
}
