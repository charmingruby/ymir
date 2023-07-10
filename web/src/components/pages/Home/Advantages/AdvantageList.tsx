import { ReactNode } from 'react'
import { LuExpand } from 'react-icons/lu'
import { AdvantageItem } from './AdvantageItem'

export interface Advantage {
  icon: ReactNode
  title: string
  description: string
}

const advantagesList: Advantage[] = [
  {
    icon: <LuExpand size={20} />,
    title: 'Scalability',
    description:
      "Empower your applications with unprecedented scalability. Our innovative feature seamlessly scales your applications, ensuring they can handle increased workloads and user demands effortlessly. Stay ahead of the competition and confidently expand your software's capabilities without compromising performance.",
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Developer Experience',
    description:
      'Elevate your developer experience with our user-friendly application. We prioritize simplicity and efficiency, offering an intuitive interface and robust features that enhance your productivity. From streamlined project management to seamless collaboration, our app empowers you to focus on what matters most: crafting exceptional software.',
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Code Quality and Testing',
    description:
      'Ensure top-notch code quality and comprehensive testing for your software. Offers features helps the write of the automated testing, and code reviews, delivering high-quality software and with enhance stability.',
  },
  {
    icon: <LuExpand size={20} />,
    title: 'Comprehensive Documentation',
    description:
      'Effortless generation of comprehensive documentation for enhanced software understanding and collaboration.',
  },
]
export function AdvantageList() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {advantagesList.map((advantage) => (
        <AdvantageItem key={advantage.title} {...advantage} />
      ))}
    </div>
  )
}
