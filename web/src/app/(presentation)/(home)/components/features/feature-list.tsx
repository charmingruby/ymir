import { Descriptor } from '@/components/ui/descriptor'
import { FeaturesContent } from '../../contents/features'
import { FeatureItem } from './feature-item'

export function FeatureList() {
  const { featureList } = FeaturesContent

  return (
    <div className="flex flex-col gap-6">
      <Descriptor content="Dev's favorite" />
      <div className="grid  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {featureList.map((item) => (
          <FeatureItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}
