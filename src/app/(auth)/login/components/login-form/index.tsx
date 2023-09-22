import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/form/input'

export function LoginForm() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Input.Root>
        <Input.Control name="email" placeholder="Email" />
      </Input.Root>

      <Input.Root>
        <Input.Control
          name="password"
          type="password"
          required={false}
          placeholder="Password"
        />
      </Input.Root>

      <Button size="form" className="w-full mt-4">
        Sign in
      </Button>
    </div>
  )
}
