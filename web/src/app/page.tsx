'use client'

import { BookOpen } from 'phosphor-react'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div className="w-full">
      <div className="mx-auto my-0 flex w-full max-w-6xl flex-col">
        {/* Hero Container */}
        <div className="mx-auto max-w-4xl px-8 py-24">
          {/* Tagline */}
          <div className="mb-16 flex w-full flex-col items-center justify-center gap-y-3.5 text-6xl">
            <p className="my-0 font-alt">The Development assistence</p>
            <p className="my-0 font-alt text-primary-500">
              That your team needed
            </p>
          </div>

          {/* Description */}
          <div className="w-full">
            <div className="mb-8">
              <h2 className="text-center text-lg font-medium leading-relaxed text-gray-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                ullam provident officia voluptatibus quos quo, odit beatae nemo
                sit. Blanditiis pariatur cupiditate iure! Doloremque aperiam quo
                minus doloribus. Dolorum, optio.
              </h2>
            </div>

            <div className="flex w-full justify-center gap-4">
              <Button className="p-5 text-base">Start your app</Button>
              <Button className="p-5 text-base" variant="secondary">
                <div className="flex items-center">
                  <span className="mr-1">Documentation</span>
                  <BookOpen />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
