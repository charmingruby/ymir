const getUserByEmail = async (email: string) => {
  const res = await fetch(`/api/auth/get-user-by-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  const data = await res.json()

  if (!data) {
    return null
  }

  return data
}

export { getUserByEmail }
