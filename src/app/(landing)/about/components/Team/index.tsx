import { Container } from '@/components/ui/Container'
import { Invitation } from './Invitation'
import { Members } from './Members'

export function Team() {
  return (
    <Container>
      <Invitation />
      <Members />
    </Container>
  )
}
