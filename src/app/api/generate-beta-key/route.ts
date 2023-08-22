import { GenerateHash } from '@/libs/hash/generate-hash'
import { prisma } from '@/libs/prisma'
import { BetaKeyValidator } from '@/libs/validators/beta-key'
import { env } from '@/utils/env'
import { NextRequest, NextResponse } from 'next/server'
import dayjs from 'dayjs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { secretKey, value } = BetaKeyValidator.parse(body)

    if (secretKey !== env.SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret key.' },
        {
          status: 401,
        },
      )
    }

    const valueHash = await GenerateHash(value)

    const createdAt = dayjs()
    const parsedCreatedAtToDate = dayjs(createdAt).toDate()

    const validUntil = createdAt.add(7, 'day')
    const parsedValidUntilToDate = dayjs(validUntil).toDate()

    const betaKey = await prisma.betaKey.create({
      data: {
        hash: valueHash,
        createdAt: parsedCreatedAtToDate,
        validUntil: parsedValidUntilToDate,
      },
    })

    return NextResponse.json(betaKey, { status: 201 })
  } catch (err) {
    console.error(err)
  }
}
