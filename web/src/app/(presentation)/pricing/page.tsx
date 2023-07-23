import { Container } from '@/components/ui/container'
import { Header } from './components/header'
import { Box } from '@/components/ui/box'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <Container>
        <div className=" py-12">
          <Header />

          <div className="grid grid-cols-3 gap-x-4">
            <Box>
              <span>pricing</span>
            </Box>
            <Box>
              <span>pricing</span>
            </Box>
            <Box>
              <span>pricing</span>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  )
}
