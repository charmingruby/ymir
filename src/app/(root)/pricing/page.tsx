import { Header } from './components/header'
import { PricingCard } from './components/card'
import { Container } from '@/components/ui/Container'

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <div className="border-b border-b-gray-600 bg-gray-900 py-8">
        <Container size="lg" spacing="spaceless">
          <Header />
        </Container>
      </div>

      <Container size="lg" spacing="spaceless">
        <div className="py-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
        </div>
      </Container>
    </div>
  )
}
