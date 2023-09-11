import { Footer } from '@/app/(root)/components/footer'
import { Header } from '@/app/(root)/components/header'
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
