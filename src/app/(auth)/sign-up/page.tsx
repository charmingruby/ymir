import { Box } from '@/components/ui/Box'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function SignUp() {
  return (
    <div className="flex-1 bg-gray-900 min-h-screen flex flex-col">
      <Container spacing="topPage" className="flex flex-col items-center">
        <Box className="max-w-xl w-full">
          <form className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-2">
              <Button color="light">Sign up with Google</Button>
              <Button color="light">Sign up with Github</Button>
            </div>

            <div className="h-8 relative flex items-center justify-center">
              <div className="absolute w-full h-px bg-gray-600" />
              <span className="bg-gray-800 z-10 px-4">or</span>
            </div>

            <Button>Create account</Button>
          </form>
        </Box>
      </Container>
    </div>
  )
}
