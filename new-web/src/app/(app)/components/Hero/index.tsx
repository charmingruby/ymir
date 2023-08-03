import { Container } from '@/components/ui/Container'
import { ButtonGroup } from './ButtonGroup'
import { Presentation } from './Presentation'
import { Footnote } from './Footnote'

export function Hero() {
  return (
    <Container
      spacing="topPage"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="sm:mx-auto sm:max-w-4xl">
        <Presentation />
        <ButtonGroup />
        <Footnote />
      </div>
    </Container>
  )
}
