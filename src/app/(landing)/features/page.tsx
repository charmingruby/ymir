import { Presentation } from '@/components/pages/landing/features/Presentation'
import { FeatureList } from '@/components/pages/landing/features/FeatureList'
import { Highlights } from '@/components/pages/landing/features/Highlights'
import { Invitation } from '@/components/pages/landing/features/Invitation'
import { CTA } from '@/components/pages/landing/features/CTA'

export default function Features() {
  return (
    <>
      <Presentation />
      <FeatureList />
      <Invitation />
      <Highlights />
      <CTA />
    </>
  )
}
