import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const nodeEnv = z.enum(['development', 'production', 'test'])

// function requiredOnEnv(env: z.infer<typeof nodeEnv>) {
//   return (value: any) => {
//     if (env === process.env.NODE_ENV && !value) {
//       return false
//     }

//     return true
//   }
// }

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
    SECRET: z.string().min(1),
  },
  client: {},
  shared: {
    NODE_ENV: nodeEnv,
    NEXT_PUBLIC_API_URL: z.string().url().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,

    NODE_ENV: process.env.NODE_ENV,
  },
})
