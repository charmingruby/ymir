import { ReactNode } from 'react'
import { Footer } from '../../components/layouts/app/footer'
import { Header } from '@/components/layouts/app/header'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
