import { create } from 'zustand'

type StringOrEmpty = string | null

type DateOrEmpty = Date | null

export interface UserRegisterState {
  id: StringOrEmpty
  name: StringOrEmpty
  lastName: StringOrEmpty
  email: StringOrEmpty
  password: StringOrEmpty
  birthDate: DateOrEmpty
  country: StringOrEmpty
  betaKeyId: StringOrEmpty
}

export const useUserRegisterStore = create<UserRegisterState>((set, get) => {
  return {
    id: null,
    name: null,
    lastName: null,
    email: null,
    password: null,
    birthDate: null,
    betaKeyId: null,
    country: null,
  }
})
