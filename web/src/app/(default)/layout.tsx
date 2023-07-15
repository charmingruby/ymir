import { Footer } from '@/components/layouts/Default/Footer'
import { Header } from '@/components/layouts/Default/Header'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
