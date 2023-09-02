import { create } from 'zustand'
import { UserRegisterStore } from './types/store'
import { UserRegisterActions } from './types/actions'

export const useUserRegisterStore = create<
  UserRegisterStore & UserRegisterActions
>((set, get) => ({
  name: null,
  lastName: null,
  email: null,
  country: null,
  password: null,
  useMotivation: null,
  assignPersonalDetails: () => {
    console.log()
  },
  assignPassword: () => {
    console.log()
  },
  assignUpdateProfile: () => {
    console.log()
  },
  assignUseMotivation: () => {
    console.log()
  },
}))
