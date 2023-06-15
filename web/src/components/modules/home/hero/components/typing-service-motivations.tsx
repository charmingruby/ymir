'use client'

import { useTypewriter } from 'react-simple-typewriter'

const serviceMotivations = [
  'your team needed',
  'will save your time',
  'facilitates maintenance',
]

export function TypingServiceMotivations() {
  const [serviceMotivationsData] = useTypewriter({
    words: serviceMotivations,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <p className="my-0 h-16 font-alt text-5xl text-primary-500">
      {serviceMotivationsData}
    </p>
  )
}
