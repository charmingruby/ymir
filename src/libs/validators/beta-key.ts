import { z } from 'zod'

export const CreateBetaKeyValidator = z.object({
  secretKey: z.string(),
  value: z.string(),
  senderId: z.string(),
})

export const ValidateBetaKeyValidator = z.object({
  senderId: z.string(),
  secretValue: z.string(),
})
