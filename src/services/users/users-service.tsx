interface ValidateEarlyAccessKeyRequest {
  accessKey: string
}

export const validateEarlyAccessKey = async ({
  accessKey,
}: ValidateEarlyAccessKeyRequest) => {
  return await fetch(`/api/auth/early-access/validate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ accessKey }),
  })
}
