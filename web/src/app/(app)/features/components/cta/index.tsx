import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { LuFlame } from 'react-icons/lu'

export function CTA() {
  return (
    <section className="border-t border-gray-600 py-32">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Text */}
          <div className="flex items-center gap-2 text-xl text-gray-200">
            <LuFlame className="mb-1 text-primary-300" size={24} />
            <p>
              Start developing with{' '}
              <span className="font-semibold text-primary-300">Ymir</span>.
            </p>
          </div>

          {/* Action */}
          <div className="flex w-full justify-center">
            <Button className="w-full sm:w-auto">Start app now</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
