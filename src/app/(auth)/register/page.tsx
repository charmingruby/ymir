import { Container } from '@/components/ui/Container'
import { Header } from '@/components/layout/auth/Header'
import ValidateBetaKey from './validate-beta-key/page'

export default function SignUp() {
  return (
    <div className="flex-1 min-h-screen flex flex-col">
      <Header />
      <Container
        spacing="spaceless"
        className="flex flex-col max-w-xl w-full pt-6"
      >
        <ValidateBetaKey />
      </Container>
    </div>
  )
}
