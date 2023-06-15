import { ReactNode } from 'react'
import { Header } from '@/components/shared/header'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
