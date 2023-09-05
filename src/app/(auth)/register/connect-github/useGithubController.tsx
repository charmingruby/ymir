'use client'

import { useUserRegisterStore } from '@/store/user-register'

export function useGithubController() {
  const { totalSteps } = useUserRegisterStore()

  return { totalSteps }
}
