import { prisma } from '@/libs/prisma'
import { ResponseMessage } from '@/utils/response-message'
import { NextRequest } from 'next/server'
import { z } from 'zod'

const ValidatePersonalDetailsRequest = z.object({
  email: z.string(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { email } = ValidatePersonalDetailsRequest.parse(body)

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (user) {
      return new Response(
        ResponseMessage({
          message: 'Email is already taken.',
          statusCode: 409,
        }),
        {
          status: 409,
        },
      )
    }

    return new Response(null, { status: 200 })
  } catch (err) {
    console.error(err)
  }
}
