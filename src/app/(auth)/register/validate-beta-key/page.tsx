import { Button } from '@/components/ui/Button'
import * as Input from '@/components/ui/Form/Input'
import * as AuthForm from '@/components/shared/AuthForm'
import { Label } from '@/components/ui/Form/Label'

export default function ValidateBetaKey() {
  return (
    <AuthForm.Root
      title="Early access"
      description="If you have a beta key, enter here"
    >
      <AuthForm.Form>
        <Input.Root>
          <Label text="Beta key" />
          <Input.Control placeholder="Key" />
        </Input.Root>

        <Button size="form">
          <span>Submit key</span>
        </Button>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
