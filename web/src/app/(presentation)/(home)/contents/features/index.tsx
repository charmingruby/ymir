import { ReactNode } from 'react'
import { BsUiChecks } from 'react-icons/bs'
import { FiBriefcase } from 'react-icons/fi'
import { HiUserGroup, HiOutlineChartPie } from 'react-icons/hi'
import { MdOutlineRoute, MdSchema } from 'react-icons/md'

export interface Feature {
  icon: ReactNode
  title: string
  description: string
}

const featureList: Feature[] = [
  {
    icon: <MdOutlineRoute />,
    title: 'Routing',
    description:
      'Enhanced route control and status code management for improved response handling and user experience.',
  },
  {
    icon: <MdSchema />,
    title: 'Schematization',
    description:
      'Streamlined database schema management for efficient structure definition, migration, and validation.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Requirements Management',
    description:
      'Efficient management and enforcement of business rules and requirements for enhanced application functionality and compliance.',
  },
  {
    icon: <BsUiChecks />,
    title: 'Assignments Coverage',
    description:
      'Comprehensive assignment tracking, visibility for improved productivity and accountability.',
  },
  {
    icon: <HiUserGroup />,
    title: 'Integration In Teams',
    description:
      'Effortless integration management for developer-friendly team collaboration and enhanced productivity.',
  },
  {
    icon: <HiOutlineChartPie />,
    title: 'Development Analytics',
    description:
      'Actionable insights through development analytics for optimizing app performance and development processes.',
  },
]

export const FeaturesContent = {
  descriptor: 'Most notable features',
  title: 'Streamlined development features',
  description:
    'Discover the Power of Our Application&apos;s Top Features, Ensuring Scalability and Organizational Excellence. With our robust feature set, you can efficiently manage and scale your projects while maintaining a well-organized development process. Boost productivity, enhance collaboration, and achieve seamless scalability with our powerful tools and functionalities.',
  featureList,
}
