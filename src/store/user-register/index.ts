import { create } from 'zustand'
import { UserRegisterStore } from './types/store'
import {
  AssignPersonalDetailsProps,
  UserRegisterActions,
} from './types/actions'

export const useUserRegisterStore = create<
  UserRegisterStore & UserRegisterActions
>((set) => {
  return {
    totalSteps: 4,
    name: '',
    lastName: '',
    email: '',
    birthdate: new Date(),
    password: '',
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
