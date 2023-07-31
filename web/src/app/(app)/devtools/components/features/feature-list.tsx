import { FeatureItem } from './feature-item'
import { LuLineChart, LuBriefcase, LuLayoutDashboard } from 'react-icons/lu'

export function FeatureList() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <FeatureItem
        icon={LuBriefcase}
        title="Insights"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos ut necessitatibus temporibus iusto laboriosam ab excepturi quibusdam tenetur quas iure qui molestias ea odit quia aperiam blanditiis. Voluptatibus, quos."
      />
      <FeatureItem
        icon={LuLayoutDashboard}
        title="Insights"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos ut necessitatibus temporibus iusto laboriosam ab excepturi quibusdam tenetur quas iure qui molestias ea odit quia aperiam blanditiis. Voluptatibus, quos."
      />
      <FeatureItem
        icon={LuLineChart}
        title="Insights"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos ut necessitatibus temporibus iusto laboriosam ab excepturi quibusdam tenetur quas iure qui molestias ea odit quia aperiam blanditiis. Voluptatibus, quos."
      />
      <FeatureItem
        icon={LuLineChart}
        title="Insights"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos ut necessitatibus temporibus iusto laboriosam ab excepturi quibusdam tenetur quas iure qui molestias ea odit quia aperiam blanditiis. Voluptatibus, quos."
      />
      <FeatureItem
        icon={LuLineChart}
        title="Insights"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos ut necessitatibus temporibus iusto laboriosam ab excepturi quibusdam tenetur quas iure qui molestias ea odit quia aperiam blanditiis. Voluptatibus, quos."
      />
      <FeatureItem
        icon={LuLineChart}
        title="Insights"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos ut necessitatibus temporibus iusto laboriosam ab excepturi quibusdam tenetur quas iure qui molestias ea odit quia aperiam blanditiis. Voluptatibus, quos."
      />
    </div>
  )
}
