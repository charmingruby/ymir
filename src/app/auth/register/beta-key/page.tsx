'use client'

import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/form/input'
import * as AuthForm from '../../components/auth-form'
import { Label } from '@/components/ui/form/label'
import { useRouter } from 'next/navigation'

export default function BetaKey() {
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
