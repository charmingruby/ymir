import { Container } from '@/components/ui/Container'
import { UserDetailsStepForm } from './step-1/components/UserDetailsStepForm'
import { Header } from '@/components/layout/auth/Header'

export default function SignUp() {
  return (
    <div className="flex-1 min-h-screen flex flex-col">
      <Header />
      <Container
        spacing="spaceless"
        className="flex flex-col max-w-xl w-full pt-6"
      >
        <UserDetailsStepForm />
      </Container>
    </div>
  )
}
