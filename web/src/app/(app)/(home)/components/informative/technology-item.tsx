import { Box } from '@/components/ui/box'
import { SupporttedTechnology } from './technology-list'

export function TechnologyItem({ icon, name }: SupporttedTechnology) {
  return (
    <Box spacing="md">
      <div className="flex w-full items-center justify-center gap-4">
        <div className="rounded-mdp-2 text-4xl shadow-lg">{icon}</div>
      </div>
    </Box>
  )
}
