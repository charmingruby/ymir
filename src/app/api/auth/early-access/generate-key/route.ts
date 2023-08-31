import { GenerateHash } from '@/libs/hash/generate-hash'
import { prisma } from '@/libs/prisma'
import { NextRequest } from 'next/server'
import dayjs from 'dayjs'
import { ResponseMessage } from '@/utils/response-message'
import { CreateEarlyAccessKeyValidator } from '@/libs/validators/early-access'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { value, senderId } = CreateEarlyAccessKeyValidator.parse(body)

    /* Validate if sender exists */
    const sender = await prisma.user.findUnique({
      where: {
        id: senderId,
      },
      include: {
        accessKey: {
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
    const { accessKey } = sender

    if (accessKey?.senderId !== undefined) {
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

    await prisma.accessKey.create({
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
