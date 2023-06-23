import { InvalidStatusCodeError } from '../error/invalid-status-code-error'
import { Field } from './field'

export interface ResponseProps {
  type: 'success' | 'error'
  description: string
  message?: string | null
  statusCode: number
  response: Field[]
}

export class Response {
  private _type: 'success' | 'error'
  private _message: string | null
  private _statusCode: number
  private _response: Field[]
  private _description: string

  private validateStatusCode(statusCode: number) {
    if (statusCode < 100 || statusCode > 599) {
      throw new InvalidStatusCodeError()
    }

    return statusCode
  }

  private constructor({
    statusCode = 200,
    message,
    type = 'success',
    response,
    description,
  }: ResponseProps) {
    this._statusCode = this.validateStatusCode(statusCode)
    this._description = description
    this._type = type
    this._message = message ?? null
    this._response = response ?? []
  }

  static create(props: ResponseProps) {
    const response = new Response(props)
    return response
  }
}
