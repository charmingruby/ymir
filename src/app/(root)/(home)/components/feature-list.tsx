import { FeatureItem } from './feature-item'

export function FeatureList() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
      <FeatureItem
        title="Progress tracker"
        description="Comprehensive project progress tracking solution for enhanced productivity and insightful reporting."
      />
      <FeatureItem
        title="Team up"
        description="Enhancing teamwork: Maximizing efficiency through outstanding integration solutions."
      />
      <FeatureItem
        title="Project balance control"
        description="Strategic project finance control for efficient resource management."
      />
    </div>
  )
}
