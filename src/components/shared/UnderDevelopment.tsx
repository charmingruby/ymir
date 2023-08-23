import { AlertTriangle } from 'lucide-react'
import * as Container from '../ui/Container'
import { Box } from '../ui/Box'

export function UnderDevelopment() {
  return (
    <Container.Root className="flex min-h-screen items-center justify-center">
      <Container.Content>
        <Box
          className="flex w-auto flex-col items-center justify-between gap-16 md:flex-row md:self-center"
          spacing="larger"
          color="light"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <AlertTriangle size={24} className="text-danger-300" />
              <h2 className="text-lg">
                Warn from{' '}
                <span className="font-semibold text-primary-300">Ymir</span>
              </h2>
            </div>
            <p className="text-gray-400">Page under development.</p>
          </div>
        </Box>
      </Container.Content>
    </Container.Root>
  )
}
