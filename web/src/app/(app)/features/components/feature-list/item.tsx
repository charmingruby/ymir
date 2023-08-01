import { Box } from '@/components/ui/box'
import { LuArrowLeftRight } from 'react-icons/lu'
import { Text } from '@/components/ui/text'

export function Item() {
  return (
    <Box
      spacing="larger"
      className="flex flex-col items-center gap-6 text-gray-50"
    >
      <Box spacing="icon" className="shrink-0 border-gray-400 bg-gray-500">
        <LuArrowLeftRight size={24} className="text-primary-300" />
      </Box>
      <p className="text-xl font-semibold">Route control</p>

      <Text className="text-base">
        Register the url, status code, request and response with types and
        values.
      </Text>
    </Box>
  )
}
