import { Presentation } from './components/presentation'
import { CTA } from './components/cta'
import { FeatureList } from './components/feature-list'

export default function Features() {
  return (
    <div className="min-h-screen">
      <Presentation />
      <FeatureList />
      <CTA />
    </div>
  )
}
