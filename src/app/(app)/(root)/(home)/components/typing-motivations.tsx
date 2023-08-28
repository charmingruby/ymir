'use client'

import { useTypewriter } from 'react-simple-typewriter'

const servicesMotivation = ['comfort', 'consistency', 'quality', 'people']

export function TypingMotivations() {
  const [serviceMotivationsData] = useTypewriter({
    words: servicesMotivation,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <span className="text-primary-300 underline underline-offset-4">
      {serviceMotivationsData}
    </span>
  )
}
