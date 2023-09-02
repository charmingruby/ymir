import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { ElementType } from 'react'

interface SolutionItemProps {
  icon: ElementType
  title: string
  description: string
}

export function SolutionItem({
  icon: Icon,
  title,
  description,
}: SolutionItemProps) {
  return (
    <Box
      spacing="spaceless"
      color="light"
      className="px-4 sm:px-8 py-8 flex flex-col gap-4 items-center"
    >
      <Box spacing="icon" className="bg-primary-300 border-none">
        <Icon className="text-white" />
      </Box>

      <div className="space-y-2 text-center">
        <h2 className="font-semibold text-2xl text-primary-300">{title}</h2>
        <Text variant="lowOpacity">{description}</Text>
      </div>
    </Box>
  )
}
