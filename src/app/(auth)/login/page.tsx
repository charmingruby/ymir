import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import * as Input from '@/components/ui/form/input'
import Link from 'next/link'
import grayLogo from '@/assets/images/gray-logo.svg'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import teamImage from '@/assets/images/sign-in.svg'
import { Text } from '@/components/ui/text'

export default function SignIn() {
  return (
    <Container.Root>
      <Container.Content className="max-w-xl lg:max-w-7xl h-screen flex-row flex-1 items-center lg:grid lg:grid-cols-2 gap-12 lg:py-12">
        <div className="flex flex-col justify-center w-full mx-auto max-w-md">
          <div className="flex flex-row items-center gap-2 justify-center">
            <Image src={grayLogo} alt="Ymir Logo" className="h-5 w-5" />
            <span className="text-gray-200 font-logo text-2xl">Ymir</span>
          </div>

          <div className="flex flex-col items-center mt-16">
            <strong className="block text-3xl">Sign in</strong>

            <span className="mt-3 mb-8">
              Boost your{' '}
              <strong className="text-primary-300">productivity</strong>.
            </span>
          </div>

          <div className="flex w-full flex-col gap-4">
            <Input.Root>
              <Input.Control name="email" placeholder="Email" />
            </Input.Root>

            <Input.Root>
              <Input.Control
                name="password"
                type="password"
                required={false}
                placeholder="Password"
              />
            </Input.Root>

            <Button size="form" className="w-full mt-4">
              Sign in
            </Button>
          </div>

          <span className="mt-4 mb-12 text-base">
            Doesn{"'"}t have an account?{' '}
            <Link
              href="/register"
              prefetch={false}
              className="font-semibold text-primary-300 hover:underline underline-offset-2 transition-all"
            >
              Sign up
            </Link>
          </span>
        </div>

        <div className="hidden lg:flex flex-col justify-center">
          <div className="flex items-center justify-center">
            <Image src={teamImage} alt="Sign in image" className="w-[30rem]" />
          </div>
          <div className="flex items-center gap-2 mb-2 border-t pt-8 border-gray-100">
            <Image src={logo} alt="Ymir Logo" className="h-6 w-6" />
            <span className="text-primary-300 font-logo text-3xl">Ymir</span>
          </div>
          <Text variant="lowOpacity">
            Register now and embark on a journey of personal growth and
            development with our transformative app. Start your path to success
            today.
          </Text>
        </div>
      </Container.Content>
    </Container.Root>
  )
}
