import { Button } from '@/components/ui/button'
import { LuArrowRight } from 'react-icons/lu'
import { Text } from '@/components/ui/text'

export function TecHelp() {
  return (
    <div className="flex flex-col gap-2">
      <Text>
        But if needed, we can help you to choose the app lang with{' '}
        <span className="font-medium text-success-300">pros</span> and{' '}
        <span className="font-medium text-danger-300">cons</span> for some apps.
      </Text>
      <Button className="gap-2 px-8 lg:self-start">
        <span className="text-base">Read more</span>
        <LuArrowRight />
      </Button>
    </div>
  )
}
