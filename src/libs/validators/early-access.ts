import { z } from 'zod'

export const CreateEarlyAccessKeyValidator = z.object({
  value: z.string(),
  senderId: z.string(),
})

export const EarlyAccessKeyValidator = z.object({
  accessKey: z.string(),
})
