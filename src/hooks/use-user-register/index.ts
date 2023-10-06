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
    totalSteps: 3,
    name: '',
    lastName: '',
    email: '',
    birthdate: new Date(),

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
  }
})
