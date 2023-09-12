import { ReactNode } from 'react'
import '../styles/globals.css'
import { Inter, Bai_Jamjuree as BaiJamjuree, Righteous } from 'next/font/google'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/libs/react-query'
import { NextAuthProvider } from '@/components/session-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-baiJamjuree',
})

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous',
})

export const metadata = {
  title: 'Ymir',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`
          ${inter.variable} ${baiJamjuree.variable} ${righteous.variable}
          scroll-smooth bg-gray-50 font-sans text-gray-600 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200
        `}
      >
        <NextAuthProvider>
          <QueryClientProvider client={queryClient}>
            <main>{children}</main>
          </QueryClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
