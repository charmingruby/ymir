import * as Container from '@/components/ui/container'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { ServiceLink } from './service-link'

export function Footer() {
  return (
    <Container.Root className="mb-8 px-6 md:px-8">
      <Container.Content className="border border-gray-100 rounded-md flex md:flex-row md:justify-between">
        <section className="flex flex-col gap-4 mb-8 md:mb-0">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Ymir Logo" className="w-6 h-6" />
            <span className="font-logo text-3xl">Ymir</span>
          </div>

          <small className="text-gray-300 leading-relaxed max-w-xs ">
            A toolkit for develoopers thaat makes running projects easier and
            more efficient.
          </small>

          <span className="text-gray-300 text-sm md:mt-8 font-medium">
            Design and built by{' '}
            <Link
              href="/"
              prefetch={false}
              className="underline underline-offset-4 hover:text-primary-300 transition-colors"
            >
              Gustavo Dias
            </Link>
            . The source code is on{' '}
            <Link
              href="/"
              prefetch={false}
              className="underline underline-offset-4 hover:text-primary-300 transition-colors"
            >
              Github
            </Link>
            .
          </span>
        </section>

        <section className="flex flex-row gap-16">
          <div className="flex flex-col gap-4">
            <strong className="text-base">Product</strong>

            <div className="flex flex-col gap-1">
              <ServiceLink label="Solutions" url="/solutions" />
              <ServiceLink label="Use Cases" url="/about" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-base">Resources</strong>

            <div className="flex flex-col gap-1">
              <ServiceLink
                label="Linkedin"
                url="https://www.linkedin.com/in/gustavo-dias21/"
              />
              <ServiceLink
                label="Github"
                url="https://github.com/charmingruby"
              />
              <ServiceLink label="Contact us" url="/contact" />
            </div>
          </div>
        </section>
      </Container.Content>
    </Container.Root>
  )
}
