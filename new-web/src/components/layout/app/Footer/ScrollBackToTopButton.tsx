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
      <Box spacing="icon" animation="hover" className="w-10 h-10">
        <ChevronUp className="text-xl text-gray-100 transition-colors group-hover:text-primary-300" />
      </Box>
    </div>
  )
}
