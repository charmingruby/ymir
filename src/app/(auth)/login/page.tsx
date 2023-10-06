import * as Container from '@/components/ui/container'
import Link from 'next/link'
import grayLogo from '@/assets/images/gray-logo.svg'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import teamImage from '@/assets/images/sign-in.svg'
import { Text } from '@/components/ui/text'
import { Header } from '../components/header'
import { LoginForm } from './components/login-form'

export default function SignIn() {
  return (
    <div>
      <Header />
      <Container.Root className="min-h-screen flex items-center">
        <Container.Content className="max-w-xl mx-auto">
          <div className="flex flex-col justify-center w-full bg-white border border-gray-100 rounded-xl py-8 px-8">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center">
                <Image src={logo} alt="" className="h-8 w-8" />
                <strong className="block font-semibold text-2xl">
                  Log Into Ymir
                </strong>
              </div>

              <span className="mt-4 text-base">
                New here?{' '}
                <Link
                  href="/register"
                  prefetch={false}
                  className="font-semibold text-primary-300 hover:underline underline-offset-2 transition-all"
                >
                  Sign up
                </Link>
              </span>
            </div>

            <LoginForm />
          </div>
        </Container.Content>
      </Container.Root>
    </div>
  )
}
