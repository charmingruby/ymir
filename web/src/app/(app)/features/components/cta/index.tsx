import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function CTA() {
  return (
    <section className="border-t border-gray-600 py-32">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Text */}
          <div className="text-xl text-gray-200">
            Start developing with{' '}
            <span className="font-semibold text-primary-300">Ymir</span>.
          </div>

          {/* Action */}
          <div>
            <Button>Start app now</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
