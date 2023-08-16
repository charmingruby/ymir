import { TypingMotivations } from './TypingMotivations'
import { Text } from '@/components/ui/Text'

export function Presentation() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-y-3.5 mb-8">
        <div className="space-y-2">
          <h1 className="my-0 text-center font-alt font-semibold text-4xl sm:text-5xl">
            Development assistence that
          </h1>
          <TypingMotivations />
        </div>
      </div>

      <div className="flex w-full mb-12 flex-col gap-8">
        <Text size="lg" className="text-center">
          Ymir unlocks a new level of{' '}
          <span className="font-bold text-gray-900">
            Software Development Experience
          </span>{' '}
          by working working in each piece of an app, since the business rules
          to database modeling, all of this been friendly for developers teams
          and organizations.
        </Text>
      </div>
    </>
  )
}
