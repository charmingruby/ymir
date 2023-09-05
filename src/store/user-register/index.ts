import { create } from 'zustand'
import { UserRegisterStore } from './types/store'
import {
  AssignPersonalDetailsProps,
  UserRegisterActions,
} from './types/actions'

export const useUserRegisterStore = create<
  UserRegisterStore & UserRegisterActions
>((set, get) => {
  return {
    totalSteps: 4,
    name: null,
    lastName: null,
    email: null,
    birthdate: null,
    password: null,
    useMotivation: null,
    assignPersonalDetails: ({
      name,
      lastName,
      email,
      birthdate,
    }: AssignPersonalDetailsProps) => {
      set({
        name,
        lastName,
        email,
        birthdate,
      })
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
  }
})
