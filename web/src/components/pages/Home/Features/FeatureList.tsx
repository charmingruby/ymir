import { ReactNode } from 'react'
import { LuExpand } from 'react-icons/lu'
import { FeatureItem } from './FeatureItem'

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
      "Empower your applications with unprecedented scalability. Our innovative feature seamlessly scales your applications, ensuring they can handle increased workloads and user demands effortlessly. Stay ahead of the competition and confidently expand your software's capabilities without compromising performance.",
    url: 'y',
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Developer Experience',
    description:
      'Elevate your developer experience with our user-friendly application. We prioritize simplicity and efficiency, offering an intuitive interface and robust features that enhance your productivity. From streamlined project management to seamless collaboration, our app empowers you to focus on what matters most: crafting exceptional software.',
    url: 'yy',
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Code Quality and Testing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam cum reprehenderit quam. Dicta, perspiciatis delectus illo modi amet reprehenderit omnis magnam voluptate odit nesciunt accusantium possimus ex soluta ut.',
    url: 'yyy',
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Comprehensive Documentation',
    description: 'lorem ipsum dolor sit amet',
    url: 'yyyy',
  },
]
export function FeatureList() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {featuresList.map((feature) => (
        <FeatureItem key={feature.url} {...feature} />
      ))}
    </div>
  )
}
