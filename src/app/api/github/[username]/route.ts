interface GetGithubAccountParams {
  params: {
    username: string
  }
}

export async function GET(
  request: Request,
  { params: { username } }: GetGithubAccountParams,
) {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const data = await res.json()

  return new Response(JSON.stringify({ username, data }), { status: 200 })
}
