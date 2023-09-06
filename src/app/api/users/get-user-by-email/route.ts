import { prisma } from '@/libs/prisma'
import { ResponseMessage } from '@/utils/response-message'
import { NextRequest } from 'next/server'
import { z } from 'zod'

const GetUserByEmailRequest = z.object({
  email: z.string(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = GetUserByEmailRequest.parse(body)

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (user) {
      return new Response(
        ResponseMessage({
          message: 'Email is already taken.',
          statusCode: 401,
        }),

        { status: 401 },
      )
    }

    return new Response(JSON.stringify(user), { status: 200 })
  } catch (err) {
    console.error(err)
  }
}
