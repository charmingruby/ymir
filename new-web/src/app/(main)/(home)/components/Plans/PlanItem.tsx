import { Box } from '@/components/ui/Box'
import { Text } from '@/components/ui/Text'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

interface PlanItemProps {
  icon: ElementType
  name: string
  description: string
}

export function PlanItem({ icon: Icon, name, description }: PlanItemProps) {
  return (
    <Box className="flex flex-col" spacing="spaceless">
      <div className="sm:px-8 px-4 py-4 flex flex-col items-center">
        <div className="w-12 h-12 items-center flex justify-center">
          <Icon className="text-primary-300" size={32} />
        </div>

        <strong className="font-semibold text-lg mt-6">{name}</strong>
        <Text className="mt-2 text-center">{description}</Text>
      </div>

      <div className="border-t border-gray-600 py-3">
        <Link
          href="/"
          prefetch={false}
          className="text-gray-300 self-center justify-center flex items-center gap-2 hover:text-primary-300 cursor-pointer transition-colors"
        >
          <span className="">Get plan</span>
          <ArrowRight className="" size={16} />
        </Link>
      </div>
    </Box>
  )
}
