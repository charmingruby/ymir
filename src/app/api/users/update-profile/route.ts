import { prisma } from '@/libs/prisma'
import { ResponseMessage } from '@/utils/response-message'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { z } from 'zod'

const ProfileData = z.object({
  username: z.string(),
  stack: z.string(),
  role: z.string(),
  bio: z.string(),
})

export async function POST(req: NextRequest) {
  const userId = cookies().get('@ymir:userId')?.value

  if (!userId) {
    return new Response(
      ResponseMessage({
        message: 'Cookie not found.',
        statusCode: 403,
      }),
    )
  }

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return new Response(
      ResponseMessage({
        message: 'User not found by cookie.',
        statusCode: 404,
      }),
    )
  }

  const body = await req.json()

  const { username, role, stack, bio } = ProfileData.parse(body)

  const usernameAlreadyInUse = await prisma.profile.findFirst({
    where: {
      username,
    },
  })

  if (usernameAlreadyInUse) {
    return new Response(
      ResponseMessage({
        message: 'Username already taken.',
        statusCode: 409,
      }),
      { status: 409 },
    )
  }

  await prisma.profile.create({
    data: {
      userId,
      bio,
      role,
      stack,
      username,
    },
  })

  return new Response(
    ResponseMessage({
      message: 'User profile created successfully.',
      statusCode: 201,
    }),
    { status: 201 },
  )
}
