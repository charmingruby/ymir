import { ReactNode } from 'react'
import { Header } from './components/header'
import { Footer } from './components/footer'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
