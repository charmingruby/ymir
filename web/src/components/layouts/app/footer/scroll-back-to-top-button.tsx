'use client'

import { Box } from '@/components/ui/box'
import { LuChevronUp } from 'react-icons/lu'

export function ScrollBackToTopButton() {
  const isBrowser = () => typeof window !== 'undefined' // The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div onClick={scrollToTop}>
      <Box spacing="icon" animation="hover">
        <LuChevronUp className="text-xl text-gray-100 transition-colors group-hover:text-primary-300" />
      </Box>
    </div>
  )
}
