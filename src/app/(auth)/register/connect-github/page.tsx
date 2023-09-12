'use client'

import * as AuthForm from '../../components/auth-form'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github } from 'lucide-react'

export default function ConnectGithub() {
  return (
    <AuthForm.Root
      title="Create a new account"
      description="at the speeed of thought"
      multistep={{
        currentStep: 3,
        totalSteps: 4,
      }}
    >
      <AuthForm.Form className="flex  w-full flex-col gap-4">
        <div className="flex flex-col gap-8 mt-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Github className="text-primary-300 h-5 w-5" />
              <span className="font-medium text-primary-300 text-lg">
                Github connection
              </span>
            </div>

            <div className="bg-white border border-gray-100 h-[52px] px-3 rounded-lg flex flex-row items-center w-full">
              <span className="bg-white">github.com/</span>
              <input
                placeholder="your-username"
                className="h-[51px] flex-1 rounded-r-lg outline-none bg-white overflow-hidden mr-4"
              />
              <Button size="sm" variant="secondary">
                <span>Connect</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button size="form" type="submit">
            <span>Next step</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </AuthForm.Form>
    </AuthForm.Root>
  )
}
