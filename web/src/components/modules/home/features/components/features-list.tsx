import { ReactNode } from 'react'
import { LuExpand } from 'react-icons/lu'
import { FeatureCard } from './feature-card'

export interface Feature {
  icon: ReactNode
  title: string
  description: string
  url: string
}

const featuresList: Feature[] = [
  {
    icon: <LuExpand size={20} />,
    title: 'Scalability',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam cum reprehenderit quam. Dicta, perspiciatis delectus illo modi amet reprehenderit omnis magnam voluptate odit nesciunt accusantium possimus ex soluta ut.',
    url: 'y',
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Developer Experience',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam cum reprehenderit quam. Dicta, perspiciatis delectus illo modi amet reprehenderit omnis magnam voluptate odit nesciunt accusantium possimus ex soluta ut.',
    url: 'yy',
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Developer Experience',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam cum reprehenderit quam. Dicta, perspiciatis delectus illo modi amet reprehenderit omnis magnam voluptate odit nesciunt accusantium possimus ex soluta ut.',
    url: 'yyy',
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Scalability',
    description: 'lorem ipsum dolor sit amet',
    url: 'yyyy',
  },
]
export function FeaturesList() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {featuresList.map((feature) => (
        <FeatureCard key={feature.url} {...feature} />
      ))}
    </div>
  )
}
