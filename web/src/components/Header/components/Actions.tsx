'use client'

import { Star } from 'phosphor-react'
import { Button } from '@/components/Button'

export function Actions() {
  return (
    <div className="flex gap-2">
      <div className="group flex h-7 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 transition-colors hover:bg-gray-500">
        <Star
          className="mb-0.5 text-gray-200 transition-transform group-hover:scale-110 group-hover:text-[#FFB800]"
          size={14}
        />
        <span className="leading-0 text-sm text-gray-50">
          Star us on GitHub
        </span>
      </div>
      <Button variant="secondary">Sign In</Button>
      <Button>Start your app</Button>
    </div>
  )
}
