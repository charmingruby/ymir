import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/form/input'
import * as TextArea from '@/components/ui/form/text-area'
import { Label } from '@/components/ui/form/label'

export function EmailForm() {
  return (
    <form className="flex flex-col gap-4 justify-center w-full">
      <Input.Root>
        <Label text="Name" />
        <Input.Control hasError={false} placeholder="John Doe" />
      </Input.Root>
      <Input.Root>
        <Label text="Email" />
        <Input.Control hasError={false} placeholder="johndoe@email.com" />
      </Input.Root>
      <Input.Root>
        <Label text="Subject" />
        <Input.Control hasError={false} placeholder="Subject" />
      </Input.Root>
      <TextArea.Root>
        <Label text="Message" />
        <TextArea.Control placeholder="Your message" />
      </TextArea.Root>

      <Button size="form" className="">
        Send
      </Button>
    </form>
  )
}
