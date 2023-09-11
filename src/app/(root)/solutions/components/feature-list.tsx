import {
  ListTodo,
  MessagesSquare,
  PieChart,
  Database,
  Wallet,
  Briefcase,
} from 'lucide-react'
import { FeatureItem } from './feature-item'

export function FeatureList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
      <FeatureItem
        icon={Briefcase}
        label="Business Rules"
        description="Effortlessly define, enforce, and manage complex business rules within your projects. Our app ensures that your applications align with your business logic, automating rule-based decision-making to enhance efficiency and accuracy."
      />
      <FeatureItem
        icon={ListTodo}
        label="Assignments Control"
        description="Take control of task assignments and project workflows like never before. Our app offers intuitive assignment tracking and management features, helping you distribute work, monitor progress, and ensure tasks are completed on time."
      />
      <FeatureItem
        icon={PieChart}
        label="Metrics Overview"
        description="Gain valuable insights into project performance with our robust metrics overview. Visualize key data points, track progress, and make data-driven decisions to improve project outcomes and meet your objectives."
      />
      <FeatureItem
        icon={Database}
        label="Database Pre-Moduling"
        description="Simplify database design and modeling with our app's advanced tools. Pre-model your database structures, relationships, and schemas, ensuring a solid foundation for your applications and reducing development time."
      />
      <FeatureItem
        icon={Wallet}
        label="Financial Control"
        description="Maintain precise financial control over your projects using our app's financial management capabilities. Monitor budgets, expenses, and revenue streams to keep your projects financially sound and on track."
      />
      <FeatureItem
        icon={MessagesSquare}
        label="Forum"
        description="Foster collaboration and communication within your development team and user community with our integrated forum feature. Create interactive spaces for discussions, feedback, and knowledge sharing, enhancing project engagement."
      />
    </div>
  )
}
