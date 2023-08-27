import { prisma } from '@/libs/prisma'
import { ValidateBetaKeyValidator } from '@/libs/validators/beta-key'
import { NextRequest } from 'next/server'
import { compareHash } from '@/libs/hash/compare-hash'
import { ResponseMessage } from '@/utils/response-message'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { secretValue, senderId } = ValidateBetaKeyValidator.parse(body)

    const betaKey = await prisma.betaKey.findUnique({
      where: {
        senderId,
      },
    })

    if (!betaKey) {
      return new Response(
        ResponseMessage({ message: 'Beta  key not found.', statusCode: 404 }),
        { status: 404 },
      )
    }

    if (betaKey.acceptedAt) {
      return new Response(
        ResponseMessage({ message: 'Beta key already used.', statusCode: 401 }),
        { status: 401 },
      )
    }

    const hashesMatch = await compareHash({
      hash: betaKey.hash,
      valueToValidate: secretValue,
    })

    if (!hashesMatch) {
      return new Response(
        ResponseMessage({
          message: "Beta key secret doesn't match.",
          statusCode: 401,
        }),

        { status: 401 },
      )
    }

    await prisma.betaKey.update({
      where: {
        senderId,
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
