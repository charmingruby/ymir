import { generateHash } from '@/libs/hash'
import { prisma } from '@/libs/prisma'
import { NextRequest } from 'next/server'
import { z } from 'zod'

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

  await prisma.user.create({
    data: {
      name,
      lastName,
      birthdate,
      password: passwordHash,
      email,
    },
  })

  return new Response(null, { status: 201 })
}
