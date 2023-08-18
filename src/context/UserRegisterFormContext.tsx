'use client'

import { ReactNode, createContext, useState } from 'react'

type StringOrEmpty = string | null
type DateOrEmpty = Date | null

export interface User {
  id: StringOrEmpty
  name: StringOrEmpty
  lastName: StringOrEmpty
  email: StringOrEmpty
  password: StringOrEmpty
  birthDate: DateOrEmpty
  country: StringOrEmpty
  betaKeyId: StringOrEmpty
}

interface UserRegisterContextType {
  id: string | null
}

export const UserRegisterFormContext = createContext(
  {} as UserRegisterContextType,
)

interface UserRegisterProviderProps {
  children: ReactNode
}

export function UserRegisterFormContextProvider({
  children,
}: UserRegisterProviderProps) {
  const [data, setData] = useState<User>({
    id: null,
    name: null,
    lastName: null,
    email: null,
    password: null,
    birthDate: null,
    betaKeyId: null,
    country: null,
  })

  return (
    <UserRegisterFormContext.Provider
      value={{
        id: data.id,
      }}
    >
      {children}
    </UserRegisterFormContext.Provider>
  )
}
