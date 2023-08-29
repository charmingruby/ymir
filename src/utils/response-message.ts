export interface ResponseMessageProps {
  message: string
  statusCode: number
}

export function ResponseMessage({ message, statusCode }: ResponseMessageProps) {
  return JSON.stringify({
    message,
    statusCode,
  })
}
