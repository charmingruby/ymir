import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { LuArrowLeftRight } from 'react-icons/lu'

export function HighlightedList() {
  return (
    <div className="flex flex-col gap-4">
      {/* Features */}
      <div className="grid grid-cols-2 gap-4">
        {/* Item */}
        <Box spacing="larger">
          {' '}
          <div className="flex flex-col gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary-300 bg-gray-900">
              <LuArrowLeftRight size={24} className="text-primary-300" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-semibold text-gray-50">
                Route control
              </h4>
              <Text color="lowOpacity">
                Register the url, status code, request and response with types
                and values.
              </Text>
            </div>
          </div>
        </Box>
        <Box spacing="larger">
          {' '}
          <div className="flex flex-col gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary-300 bg-gray-900">
              <LuArrowLeftRight size={24} className="text-primary-300" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-semibold text-gray-50">
                Route control
              </h4>
              <Text color="lowOpacity">
                Register the url, status code, request and response with types
                and values.
              </Text>
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}
