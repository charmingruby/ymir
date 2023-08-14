import { TypingMotivations } from './TypingMotivations'
import { Text } from '@/components/ui/Text'
import { Pin } from '@/components/shared/Pin'
import { Clock } from 'lucide-react'

export function Presentation() {
  return (
    <>
      <div className="mb-16 flex w-full flex-col items-center justify-center gap-y-3.5">
        <Pin icon={Clock} content="Beta will release soon" />

        <h1 className="my-0 pb-2 text-center font-alt font-medium text-4xl text-gray-50 sm:text-6xl">
          Development assistence that
        </h1>
        <TypingMotivations />
      </div>

      <div className="flex w-full mb-12 flex-col gap-8">
        <Text size="lg" className="text-center">
          Ymir unlocks a new level of{' '}
          <span className="font-bold text-gray-50">
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
