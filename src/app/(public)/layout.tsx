import { Footer } from '@/app/(public)/components/footer'
import { Header } from '@/app/(public)/components/header'
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
