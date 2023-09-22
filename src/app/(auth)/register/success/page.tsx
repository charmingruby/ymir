import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function RegisterSuccess() {
  return (
    <Box spacing="spaceless" color="light" className="px-4 py-6">
      <div className="flex justify-center">
        <CheckCircle className="text-success-300 h-12 w-12" strokeWidth={2.5} />
      </div>

      <div className="text-center mt-6 space-y-2">
        <h2 className="font-semibold text-2xl">Success</h2>
        <Text variant="lowOpacity">
          Your account has been created successfully. Feel free to use the app
          as you want.
        </Text>
      </div>

      <Link
        prefetch={false}
        href="/login"
        className="flex justify-center mt-12 cursor-default"
      >
        <Button>
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </Box>
  )
}
