import { Text } from '@/components/ui/Text'
import { CheckCircle } from 'lucide-react'

export function Guarantee() {
  return (
    <div className="flex items-baseline gap-2">
      <CheckCircle className="h-4 w-4 mt-0.5 text-success-300" />
      <Text className="flex-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam unde
        repellat ipsum consectetur soluta necessitatibus eveniet eius beatae,
        perferendis sunt. Doloremque quo velit ut libero eius voluptatibus
        veniam repudiandae at?
      </Text>
    </div>
  )
}
