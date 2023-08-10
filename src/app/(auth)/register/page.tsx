import { Box } from '@/components/ui/Box'
import { Container } from '@/components/ui/Container'
import { RegisterForm } from './components/RegisterForm'
import { Header } from '@/components/layout/auth/Header'

export default function SignUp() {
  return (
    <div className="flex-1 bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <Container spacing="topPage" className="flex flex-col max-w-xl w-full">
        <div className="mb-4 space-y-4  p-4">
          <div className="flex flex-col items-center">
            <strong className="block text-2xl">Create a new account</strong>
            <span className="text-gray-200 text-sm">
              at the speeed of thought
            </span>
          </div>

          {/* Multistep */}
          <div className="w-full pb-2 pt-4">
            <div className="text-sm text-gray-100 mb-2">Step 2 of 3</div>
            <div className="w-full flex gap-2">
              <div className="h-1 bg-primary-300 w-full rounded-md" />
              <div className="h-1 bg-primary-300 w-full rounded-md" />
              <div className="h-1 bg-gray-400 w-full rounded-md" />
            </div>
          </div>
        </div>

        <Box spacing="spaceless">
          <RegisterForm />
        </Box>
      </Container>
    </div>
  )
}
