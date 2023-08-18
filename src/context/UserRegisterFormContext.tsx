'use client'

import { ReactNode, createContext } from 'react'

export interface User {
  id: string
  name: string
  lastName: string
  email: string
  password: string
  birthDate: Date
  country: string
}

// interface UserRegisterContextType {

// }

export const UserRegisterFormContext = createContext({})

interface UserRegisterProviderProps {
  children: ReactNode
}

export function UserRegisterFormContextProvider({
  children,
}: UserRegisterProviderProps) {
  return (
    <UserRegisterFormContext.Provider value={[]}>
      {children}
    </UserRegisterFormContext.Provider>
  )
}
