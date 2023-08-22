import { z } from 'zod'

export const BetaKeyValidator = z.object({
  secretKey: z.string(),
  value: z.string(),
})
