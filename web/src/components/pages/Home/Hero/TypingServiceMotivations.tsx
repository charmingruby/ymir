'use client'

import { heroContent } from '@/contents/home/hero'
import { useTypewriter } from 'react-simple-typewriter'

export function TypingServiceMotivations() {
  const [serviceMotivationsData] = useTypewriter({
    words: heroContent.title.servicesMotivation,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <p className="my-0 h-16 text-center font-alt text-4xl text-primary-300 md:text-5xl">
      {serviceMotivationsData}
    </p>
  )
}
