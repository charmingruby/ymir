import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import * as Input from '@/components/ui/Form/Input'

export function RegisterForm() {
  return (
    <form className="p-4 flex flex-col gap-6 bg-gray-700">
      {/* Fields */}
      <div className="flex  w-full flex-col gap-4">
        <div className="w-full grid gap-2 grid-cols-2">
          <Input.Root>
            <Input.Control type="text" placeholder="Name" />
          </Input.Root>

          <Input.Root>
            <Input.Control type="text" placeholder="Last Name" />
          </Input.Root>
        </div>

        <Input.Root>
          <Input.Control type="email" placeholder="E-mail" />
        </Input.Root>
      </div>

      <Button className="">
        <span>Next</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </Button>
    </form>
  )
}
