import { ContentContainer } from '@/components/shared/content-container'
import { ReactNode } from 'react'
import { LuExpand } from 'react-icons/lu'
import { FeatureCard } from './components/feature-card'
import { FeatureApresentation } from './components/feature-apresentation'
import { Separator } from '@/components/shared/separator'

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
    url: 'yy',
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
    url: 'yy',
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Scalability',
    description: 'lorem ipsum dolor sit amet',
    url: 'yy',
  },
]

export function Features() {
  return (
    <section className="min-h-screen w-full border-y-2 border-gray-600 bg-gray-900 py-16">
      <ContentContainer>
        <FeatureApresentation />

        <div className="py-12">
          <Separator />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {featuresList.map((feature) => (
            <FeatureCard key={feature.url} {...feature} />
          ))}
        </div>
      </ContentContainer>
    </section>
  )
}
