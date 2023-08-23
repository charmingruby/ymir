'use client'

import { Button } from '@/components/ui/Button'
import * as Input from '@/components/ui/Form/Input'
import * as AuthForm from '@/components/shared/AuthForm'
import { Label } from '@/components/ui/Form/Label'
import { useRouter } from 'next/navigation'

export default function ValidateBetaKey() {
  const router = useRouter()

  function handleBetaKeySubmit(e: any) {
    e.preventDefault()
    router.push('personal-details')
  }

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

        <Button size="form" onClick={handleBetaKeySubmit}>
          <span>Submit key</span>
        </Button>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
