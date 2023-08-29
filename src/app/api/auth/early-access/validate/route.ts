import { prisma } from '@/libs/prisma'
import { NextRequest } from 'next/server'
import { ResponseMessage } from '@/utils/response-message'
import { EarlyAccessKeyValidator } from '@/libs/validators/early-access'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { accessKey } = EarlyAccessKeyValidator.parse(body)

    /* Verify if beta key exists */
    const betaKey = await prisma.betaKey.findUnique({
      where: {
        hash: accessKey,
      },
    })

    if (!betaKey) {
      return new Response(
        ResponseMessage({ message: 'Beta key not found.', statusCode: 404 }),
        { status: 404 },
      )
    }

    /* Verify if beta key have already been accepted */
    if (betaKey.acceptedAt) {
      return new Response(
        ResponseMessage({ message: 'Beta key already used.', statusCode: 401 }),
        { status: 401 },
      )
    }

    /* Update */
    await prisma.betaKey.update({
      where: {
        senderId: betaKey.senderId,
      },
      data: {
        acceptedAt: new Date(),
      },
    })

    return new Response(null, { status: 200 })
  } catch (err) {
    console.error(err)
  }
}
