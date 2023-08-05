import { Text } from '@/components/ui/Text'
import { FeatureItem } from './FeatureItem'

export function FeatureList() {
  return (
    <div className="">
      <Text className="text-sm italic mb-4" color="lowOpacity">
        *Most notable features that saves the paronamic view of application.
      </Text>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </div>
    </div>
  )
}
