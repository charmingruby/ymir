'use client'

import { useTypewriter } from 'react-simple-typewriter'

const servicesMotivation = [
  'your team needed',
  'will save your time',
  'facilitates maintenance',
]

export function TypingMotivations() {
  const [serviceMotivationsData] = useTypewriter({
    words: servicesMotivation,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <p className="my-0 h-[6rem] leading-normal text-center font-alt font-semibold text-4xl sm:text-5xl text-primary-gradient">
      {serviceMotivationsData}
    </p>
  )
}
