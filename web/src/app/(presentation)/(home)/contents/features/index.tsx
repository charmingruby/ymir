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

export const FeaturesContent = {
  descriptor: 'Developer friendly features',
  title: 'Streamlined development features',
  description:
    'Discover the strength of our feature-rich application that enables efficient project management and seamless scalability. Boost productivity, enhance collaboration, and achieve organizational excellence with our powerful tools and functionalities.',
  featureList,
}
