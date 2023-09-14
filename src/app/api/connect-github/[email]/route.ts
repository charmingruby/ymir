import { prisma } from '@/libs/prisma'
import { ResponseMessage } from '@/utils/response-message'
import { NextRequest } from 'next/server'
import { z } from 'zod'

interface ConnectGithubParams {
  params: {
    email: string
  }
}

const GithubDetails = z.object({
  login: z.string(),
  avatar_url: z.string(),
})

const ConnectGithubRequest = z.object({
  githubUser: z.string().nonempty(),
})

export async function POST(
  request: NextRequest,
  { params: { email } }: ConnectGithubParams,
) {
  const body = await request.json()
  const { githubUser } = ConnectGithubRequest.parse(body)

  const rawData = await fetch(`https://api.github.com/users/${githubUser}`)
  const data = await rawData.json()

  if (data.message === 'Not Found') {
    console.log('rr')
    return new Response(
      ResponseMessage({
        message: 'Github user not found',
        statusCode: 404,
      }),
      {
        status: 404,
      },
    )
  }

  const parsedData = GithubDetails.parse(data)

  const user = await prisma.user.findUnique({
    where: {
      email,
      githubUser,
    },
  })

  if (user) {
    return new Response(
      ResponseMessage({
        message: 'Github user already taken.',
        statusCode: 409,
      }),
      {
        status: 409,
      },
    )
  }

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      githubUser: parsedData.login,
      avatarUrl: parsedData.avatar_url,
    },
  })

  return new Response(
    ResponseMessage({
      message: 'Github connected successfully.',
      statusCode: 200,
    }),
    { status: 200 },
  )
}
