import { Container } from '@/components/ui/container'
import { Header } from './components/header'
import { PricingCard } from './components/card'

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <div className="border-b border-b-gray-600 bg-gray-900 py-8">
        <Container larger>
          <Header />
        </Container>
      </div>

      <Container larger>
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
