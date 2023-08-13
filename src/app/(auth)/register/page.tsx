import { Box } from '@/components/ui/Box'
import { Container } from '@/components/ui/Container'
import { RegisterForm } from './components/RegisterForm'
import { Header } from '@/components/layout/auth/Header'
import { Multistep } from '@/components/ui/Form/Multistep'

export default function SignUp() {
  return (
    <div className="flex-1 bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <Container spacing="spaceless" className="flex flex-col max-w-xl w-full">
        <div className="mb-4 space-y-4  p-4">
          <div className="flex flex-col items-center">
            <strong className="block text-2xl">Create a new account</strong>
            <span className="text-gray-200 text-sm">
              at the speeed of thought
            </span>
          </div>

          <Multistep currentStep={1} size={4} />
        </div>

        <Box spacing="spaceless">
          <RegisterForm />
        </Box>
      </Container>
    </div>
  )
}
