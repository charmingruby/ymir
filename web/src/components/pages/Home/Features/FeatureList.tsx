import { ReactNode } from 'react'
import { FeatureItem } from './Featuretem'
import { MdOutlineRoute, MdSchema } from 'react-icons/md'
import { BsUiChecks } from 'react-icons/bs'
import { FiBriefcase } from 'react-icons/fi'
import { HiUserGroup, HiOutlineChartPie } from 'react-icons/hi'

interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
}

const featureList: FeatureItemProps[] = [
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

export function FeatureList() {
  return (
    <div className="grid  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {featureList.map((item) => (
        <FeatureItem key={item.title} {...item} />
      ))}
    </div>
  )
}
