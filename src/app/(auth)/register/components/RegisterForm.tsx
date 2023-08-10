import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'
import { ArrowRight } from 'lucide-react'

export function RegisterForm() {
  return (
    <form className="p-4 flex flex-col gap-6 bg-gray-700">
      {/* Fields */}
      <div className="flex  w-full flex-col gap-4">
        <div className="w-full grid gap-2 grid-cols-2">
          <input
            placeholder="Name"
            type="text"
            className="bg-gray-900 p-4 rounded-md outline-none focus:border-primary-300 transition-colors border-2 border-gray-900"
          />
          <input
            placeholder="Last Name"
            type="text"
            className="bg-gray-900 p-4 rounded-md outline-none focus:border-primary-300 transition-colors border-2 border-gray-900"
          />
        </div>

        <input
          placeholder="Your E-mail"
          type="text"
          className="bg-gray-900 p-4 rounded-md outline-none focus:border-primary-300 transition-colors border-2 border-gray-900"
        />
      </div>
      <Button className="">
        <span>Next</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </Button>
    </form>
  )
}
