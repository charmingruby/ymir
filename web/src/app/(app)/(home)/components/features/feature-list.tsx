import { Descriptor } from '@/components/descriptor'
import { FeatureItem } from './feature-item'

export interface Feature {
  title: string
  description: string
}

const featureList: Feature[] = [
  {
    title: 'Agile Business Rules Enforcement',
    description:
      'Effortlessly enforce and manage dynamic business rules with our agiles feature. Enhance functionality, adapt to changes, and ensure seamless compliance.',
  },
  {
    title: 'Smart Route Handling',
    description:
      'Streamline responses and routing, enhance adaptability, and elevate user experience.',
  },
  {
    title: 'Simplified Database Schema Management',
    description:
      'Easily manage your database structure with our simplified schema feature. Effortlessly define and validate data for improved organization and efficiency.',
  },
  {
    title: 'Insightful Development Analytics',
    description:
      'Gain valuable insights with our Development Analytics feature. Optimize app performance and processes through actionable data-driven intelligence.',
  },
]

export function FeatureList() {
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
