import { ReactNode } from 'react'

export default function SignInLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main className="min-h-screen">
        <div className="grid grid-cols-2">
          <div className="bg-primary-500" />
          <div>{children}</div>
        </div>
      </main>
    </div>
  )
}
