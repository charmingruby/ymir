import { Footer } from '@/components/layout/main/Footer'
import { Header } from '@/components/layout/main/Header'
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
