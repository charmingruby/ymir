import { Button } from '@/components/ui/Button'
import * as Input from '@/components/ui/Form/Input'
import * as TextArea from '@/components/ui/Form/TextArea'
import { Label } from '@/components/ui/Form/Label'
import { Mail } from 'lucide-react'

export function EmailForm() {
  return (
    <section className="gap-4 flex flex-col justify-center pt-8 lg:pt-12">
      <div className="flex items-center gap-2">
        <Mail className="h-5 w-5 text-primary-300" />
        <span className="text-2xl font-medium">Leave us a message</span>
      </div>
      <form className="flex flex-col gap-4 justify-center">
        <Input.Root>
          <Label text="Name" />
          <Input.Control placeholder="John Doe" />
        </Input.Root>
        <Input.Root>
          <Label text="Email" />
          <Input.Control placeholder="johndoe@email.com" />
        </Input.Root>
        <Input.Root>
          <Label text="Subject" />
          <Input.Control placeholder="Subject" />
        </Input.Root>
        <TextArea.Root>
          <Label text="Message" />
          <TextArea.Control placeholder="Your message" />
        </TextArea.Root>

        <Button size="form" className="">
          Send
        </Button>
      </form>
    </section>
  )
}
