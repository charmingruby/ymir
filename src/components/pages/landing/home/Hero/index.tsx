import { ButtonGroup } from './ButtonGroup'
import { Presentation } from './Presentation'
import { Footnote } from './Footnote'
import { Pin } from '@/components/shared/Pin'
import { Clock } from 'lucide-react'
import * as Container from '@/components/ui/Container'

export function Hero() {
  return (
    <Container.Root>
      <Container.Content spacing="topPage" className="min-h-screen">
        <div className="flex w-auto justify-center mb-4">
          <Pin icon={Clock} content="Beta will release soon" />
        </div>

        <div className="sm:mx-auto sm:max-w-4xl flex-1 flex flex-col justify-center items-center">
          <Presentation />
          <ButtonGroup />
          <Footnote />
        </div>
      </Container.Content>
    </Container.Root>
  )
}
