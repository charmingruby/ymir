import { ReactNode } from 'react'
import { StructureItem } from './StructureItem'
import { MdOutlineRoute, MdSchema } from 'react-icons/md'
import { BsUiChecks } from 'react-icons/bs'
import { FiBriefcase } from 'react-icons/fi'
import { HiUserGroup, HiOutlineChartPie } from 'react-icons/hi'

interface StructureItemProps {
  icon: ReactNode
  title: string
  description: string
}

const structureList: StructureItemProps[] = [
  {
    icon: <MdOutlineRoute />,
    title: 'Routing',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut illo hic accusamus quidem perspiciatis fugiat nisi asperiores? Alias deleniti asperiores amet eaque neque autem modi, laborum dolorum repudiandae rerum sequi?',
  },
  {
    icon: <MdSchema />,
    title: 'Schematization',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut illo hic accusamus quidem perspiciatis fugiat nisi asperiores? Alias deleniti asperiores amet eaque neque autem modi, laborum dolorum repudiandae rerum sequi?',
  },
  {
    icon: <FiBriefcase />,
    title: 'Requirements Management',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut illo hic accusamus quidem perspiciatis fugiat nisi asperiores? Alias deleniti asperiores amet eaque neque autem modi, laborum dolorum repudiandae rerum sequi?',
  },
  {
    icon: <BsUiChecks />,
    title: 'Assignments Coverage',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut illo hic accusamus quidem perspiciatis fugiat nisi asperiores? Alias deleniti asperiores amet eaque neque autem modi, laborum dolorum repudiandae rerum sequi?',
  },
  {
    icon: <HiUserGroup />,
    title: 'Integration In Teams',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut illo hic accusamus quidem perspiciatis fugiat nisi asperiores? Alias deleniti asperiores amet eaque neque autem modi, laborum dolorum repudiandae rerum sequi?',
  },
  {
    icon: <HiOutlineChartPie />,
    title: 'Development Analytics',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut illo hic accusamus quidem perspiciatis fugiat nisi asperiores? Alias deleniti asperiores amet eaque neque autem modi, laborum dolorum repudiandae rerum sequi?',
  },
]

export function StructureList() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {structureList.map((item) => (
        <StructureItem key={item.title} {...item} />
      ))}
    </div>
  )
}
