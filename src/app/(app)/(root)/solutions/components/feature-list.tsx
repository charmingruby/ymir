import { Boxes, ListTodo, MessagesSquare, PieChart, Database, Wallet } from "lucide-react";
import { FeatureItem } from "./feature-item";

export function FeatureList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
      <FeatureItem
        icon={Boxes}
        label="Multiple Projects"
        description="          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis dignissimos, nam ea cum minus dolore quibusdam? Saepe, fugiat. Corrupti aliquid pariatur modi. Harum molestiae impedit commodi, ratione id maxime?
"
      />
      <FeatureItem
        icon={ListTodo}
        label="Assignments Control"
        description="          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis dignissimos, nam ea cum minus dolore quibusdam? Saepe, fugiat. Corrupti aliquid pariatur modi. Harum molestiae impedit commodi, ratione id maxime?
"
      />
      <FeatureItem
        icon={MessagesSquare}
        label="Team Forum"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis dignissimos, nam ea cum minus dolore quibusdam? Saepe, fugiat. Corrupti aliquid pariatur modi. Harum molestiae impedit commodi, ratione id maxime?
"
      />
      <FeatureItem
        icon={PieChart}
        label="Metrics Overview"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis dignissimos, nam ea cum minus dolore quibusdam? Saepe, fugiat. Corrupti aliquid pariatur modi. Harum molestiae impedit commodi, ratione id maxime?
"
      />
      <FeatureItem
        icon={Database}
        label="Database Pre-Moduling"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis dignissimos, nam ea cum minus dolore quibusdam? Saepe, fugiat. Corrupti aliquid pariatur modi. Harum molestiae impedit commodi, ratione id maxime?
"
      />
      <FeatureItem
        icon={Wallet}
        label="Financial Control"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis dignissimos, nam ea cum minus dolore quibusdam? Saepe, fugiat. Corrupti aliquid pariatur modi. Harum molestiae impedit commodi, ratione id maxime?
"
      />
    </div>
  )
}
