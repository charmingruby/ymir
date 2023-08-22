import { Button } from '@/components/ui/Button'
import * as Input from '@/components/ui/Form/Input'
import * as TextArea from '@/components/ui/Form/TextArea'
import { Label } from '@/components/ui/Form/Label'

export function EmailForm() {
  return (
    <div className="max-h-[32rem] w-full">
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
    </div>
  )
}
