'use client'

import { Box } from '@/components/ui/Box'
import { ChevronUp } from 'lucide-react'

export function ScrollBackToTopButton() {
  const isBrowser = () => typeof window !== 'undefined' // The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div onClick={scrollToTop}>
      <Box
        spacing="icon"
        animation="hover"
        className="w-9 h-9 bg-primary-300 border-0 hover:bg-primary-100"
      >
        <ChevronUp className="text-xl text-gray-100" />
      </Box>
    </div>
  )
}
