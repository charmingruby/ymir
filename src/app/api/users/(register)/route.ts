import { generateHash } from '@/libs/hash'
import { prisma } from '@/libs/prisma'
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { cookies } from 'next/headers'

const RegisterUserRequest = z.object({
  name: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().nonempty(),
  birthdate: z.string().nonempty(),
  password: z.string().nonempty(),
})

export async function POST(req: NextRequest) {
  const body = await req.json()

  const { name, lastName, email, birthdate, password } =
    RegisterUserRequest.parse(body)

  const passwordHash = await generateHash(password)

  const { id } = await prisma.user.create({
    data: {
      name,
      lastName,
      birthdate,
      password: passwordHash,
      email,
    },
  })

  // 1 week life age
  const maxAge = 60 * 60 * 24 * 7

  cookies().set({
    name: '@ymir:userId',
    value: id,
    maxAge,
  })

  return new Response(null, { status: 201 })
}
