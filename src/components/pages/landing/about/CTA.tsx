import { Button } from '@/components/ui/Button'
import * as Container from '@/components/ui/Container'
import Link from 'next/link'

export function CTA() {
  return (
    <Container.Root backgroundColor="blueGradient">
      <Container.Content>
        <div className="flex flex-col gap-6 py-6">
          <strong className="text-gray-50 text-xl sm:text-3xl text-center ">
            Boost your productivity
          </strong>

          <Link
            href="/register"
            prefetch={false}
            className="flex w-full justify-center"
          >
            <Button variant="light">Start developing</Button>
          </Link>
        </div>
      </Container.Content>
    </Container.Root>
  )
}
