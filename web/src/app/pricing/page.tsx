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
        <div className=" py-12">
          <div className="grid grid-cols-3 gap-x-2">
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
        </div>
      </Container>
    </div>
  )
}
