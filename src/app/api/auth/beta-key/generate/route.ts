import { GenerateHash } from '@/libs/hash/generate-hash'
import { prisma } from '@/libs/prisma'
import { CreateBetaKeyValidator } from '@/libs/validators/beta-key'
import { env } from '@/utils/env'
import { NextRequest } from 'next/server'
import dayjs from 'dayjs'
import { ResponseMessage } from '@/utils/response-message'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { secretKey, value, senderId } = CreateBetaKeyValidator.parse(body)

    /* Validate secret key */
    if (secretKey !== env.SECRET) {
      return new Response(
        ResponseMessage({ message: 'Invalid secret key.', statusCode: 401 }),
        {
          status: 401,
        },
      )
    }

    /* Validate if sender exists */
    const sender = await prisma.user.findUnique({
      where: {
        id: senderId,
      },
      include: {
        betaKey: {
          select: {
            senderId: true,
          },
        },
      },
    })

    if (!sender) {
      return new Response(
        ResponseMessage({
          message: "User sender doesn't exists.",
          statusCode: 404,
        }),
        { status: 404 },
      )
    }

    /* Validate unique generated key for user */
    const { betaKey } = sender

    if (betaKey?.senderId !== undefined) {
      return new Response(
        ResponseMessage({
          message: 'User already sent the unique key invite.',
          statusCode: 401,
        }),
        { status: 401 },
      )
    }

    const valueHash = await GenerateHash(value)

    const createdAt = dayjs()
    const parsedCreatedAtToDate = dayjs(createdAt).toDate()

    const validUntil = createdAt.add(7, 'day')
    const parsedValidUntilToDate = dayjs(validUntil).toDate()

    await prisma.betaKey.create({
      data: {
        senderId,
        hash: valueHash,
        createdAt: parsedCreatedAtToDate,
        validUntil: parsedValidUntilToDate,
      },
    })

    return new Response(null, { status: 201 })
  } catch (err) {
    console.error(err)
  }
}
