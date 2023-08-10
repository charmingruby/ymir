import { Footer } from '@/components/layout/landing/Footer'
import { Header } from '@/components/layout/landing/Header'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
