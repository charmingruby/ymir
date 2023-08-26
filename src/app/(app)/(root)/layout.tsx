import { Footer } from '@/components/layout/root/Footer'
import { Header } from '@/components/layout/root/Header'
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
