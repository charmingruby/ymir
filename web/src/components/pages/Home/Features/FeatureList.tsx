import { FeatureItem } from './Featuretem'
import { FeaturesContent } from '@/contents/home/features'

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
