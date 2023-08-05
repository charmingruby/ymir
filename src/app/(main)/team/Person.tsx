import { ElementType } from 'react'

interface MediaProps {
  icon: ElementType
  url: string
}

interface PersonProps {
  name: string
  role: string
  imageUrl: string
  medias: MediaProps[]
  description: string
}

export function Person() {
  return <div>oi</div>
}
