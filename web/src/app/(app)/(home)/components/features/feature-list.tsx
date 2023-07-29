import { Descriptor } from '@/components/descriptor'
import { FeatureItem } from './feature-item'
import { LuArrowLeftRight, LuBriefcase, LuDatabase } from 'react-icons/lu'

export function FeatureList() {
  return (
    <div className="flex flex-col gap-6">
      <Descriptor content="Dev's favorite" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <FeatureItem
          title={'Agile Business Rules Enforcement'}
          description={
            'Effortlessly enforce and manage dynamic business rules with our agiles feature. Enhance functionality, adapt to changes, and ensure seamless compliance.'
          }
          icon={LuBriefcase}
        />

        <FeatureItem
          title={'Smart Route Handling'}
          description={
            'Streamline responses and routing, enhance adaptability, and elevate user experience.'
          }
          icon={LuArrowLeftRight}
        />

        <FeatureItem
          title={'Simplified Database Schema Management'}
          description={
            'Easily manage your database structure with our simplified schema feature. Effortlessly define and validate data for improved organization and efficiency.'
          }
          icon={LuDatabase}
        />
      </div>
    </div>
  )
}
