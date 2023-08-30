import { create } from 'zustand'
import { UserRegisterStore } from './types/store'
import { UserRegisterActions } from './types/actions'

export const useUserRegisterStore = create<
  UserRegisterStore & UserRegisterActions
>((set, get) => ({
  name: null,
  lastName: null,
  email: null,
  password: null,
  country: null,
  validatedAccessKeyAt: null,
  useMotivation: null,
  assignAccessKey: () => {
    set({
      validatedAccessKeyAt: new Date(),
    })
  },
  assignPassword: () => {
    console.log()
  },
  assignPersonalDetails: () => {
    console.log()
  },
  assignUseMotivation: () => {
    console.log()
  },
  assignUpdateProfile: () => {
    console.log()
  },
}))
