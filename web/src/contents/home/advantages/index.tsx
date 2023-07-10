import { ReactNode } from 'react'
import {
  LuExpand,
  LuCode2,
  LuFlaskConical,
  LuBookOpenCheck,
} from 'react-icons/lu'

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
    icon: <LuCode2 size={20} />,
    title: 'Developer Experience',
    description:
      'Elevate your developer experience with our user-friendly application. We prioritize simplicity and efficiency, offering an intuitive interface and robust features that enhance your productivity. From streamlined project management to seamless collaboration, our app empowers you to focus on what matters most: crafting exceptional software.',
  },
  {
    icon: <LuFlaskConical size={20} />,
    title: 'Code Quality and Testing',
    description:
      'Ensure top-notch code quality and comprehensive testing for your software. Offers features helps the write of the automated testing, and code reviews, delivering high-quality software and with enhance stability.',
  },
  {
    icon: <LuBookOpenCheck size={20} />,
    title: 'Comprehensive Documentation',
    description:
      'Effortless generation of comprehensive documentation for enhanced software understanding and collaboration.',
  },
]

export const advantagesContent = {
  descriptor: 'Unlock the potential of your applications',
  title: 'Accelerate your development',
  description:
    'Enhance collaboration, boost productivity, and take your software development to new heights. Join us on this journey as we unveil the secrets behind successful application development.',
  advantagesList,
}
