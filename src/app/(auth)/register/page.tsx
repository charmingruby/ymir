import { Box } from '@/components/ui/Box'
import { ChevronRight } from 'lucide-react'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function SignUp() {
  return (
    <Box
      spacing="spaceless"
      color="light"
      className="px-4 py-8 flex flex-col items-center"
    >
      <Image src={logo} alt="Ymir logo" className="w-12" />

      <h2 className="font-bold text-4xl text-center mt-4 font-alt max-w-xs w-full">
        Access the best development tools
      </h2>

      <span className="mt-2 font-medium">Sign up to start using</span>

      <div className="mt-8 flex-col flex max-w-xs w-full">
        <Link
          prefetch={false}
          href="/register/validate-beta-key"
          className="w-full flex"
        >
          <Button
            color="primary"
            className="flex items-center w-full flex-1"
            size="form"
          >
            <span className="font-semibold">Continue with email</span>
            <ChevronRight className="w-4 h-4 text-gray-50" />
          </Button>
        </Link>
      </div>

      <span className="text-sm  mt-3 font-medium">
        Already have an account?{' '}
        <Link
          href="/login"
          prefetch={false}
          className="text-primary-300 font-semibold"
        >
          Sign in
        </Link>
      </span>
    </Box>
  )
}
