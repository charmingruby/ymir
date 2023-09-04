import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/form/input'
import * as TextArea from '@/components/ui/form/text-area'

export function EmailForm() {
  return (
    <form className="flex flex-col gap-4 justify-center w-full">
      <Input.Root>
        <Input.Control hasError={false} name="name" placeholder="Name" />
      </Input.Root>
      <Input.Root>
        <Input.Control hasError={false} name="Email" placeholder="Email" />
      </Input.Root>
      <Input.Root>
        <Input.Control hasError={false} name="Subject" placeholder="Subject" />
      </Input.Root>
      <TextArea.Root>
        <TextArea.Control placeholder="Your message" />
      </TextArea.Root>

      <Button size="form" className="">
        Send
      </Button>
    </form>
  )
}
