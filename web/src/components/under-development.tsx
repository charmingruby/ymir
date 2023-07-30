import Image from 'next/image'
import { Box } from './ui/box'
import logo from '@/assets/images/logo.svg'
import { Container } from './ui/container'
import { LuAlertTriangle } from 'react-icons/lu'

export function UnderDevelopment() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container>
        <Box
          className="flex w-auto flex-col items-center justify-between gap-16 md:flex-row md:self-center"
          spacing="larger"
        >
          <Image src={logo} alt="Ymir logo" className="h-32 w-32" />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <LuAlertTriangle size={24} className="text-danger-300" />
              <h2 className="text-lg">
                Warn from{' '}
                <span className="font-semibold text-primary-300">Ymir</span>
              </h2>
            </div>
            <p className="text-gray-200">Page under development.</p>
          </div>
        </Box>
      </Container>
    </div>
  )
}
