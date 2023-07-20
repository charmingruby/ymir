import { FeaturesContent } from '../../contents/features'
import { FeatureItem } from './feature-item'

export function FeatureList() {
  const { featureList } = FeaturesContent

  return (
    <div className="grid  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {featureList.map((item) => (
        <FeatureItem key={item.title} {...item} />
      ))}
    </div>
  )
}
