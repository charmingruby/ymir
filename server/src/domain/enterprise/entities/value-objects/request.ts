import { Field } from './field'

export interface RequestProps {
  type: 'query' | 'body' | 'params' | null
  accessType?: string | null
  params: Field[]
}

export class Request {
  private _type: 'query' | 'body' | 'params' | null
  private _accessType?: string | null
  private _params?: Field[]

  private constructor({ params = [], type, accessType }: RequestProps) {
    this._accessType = accessType ?? null
    this._type = type ?? null
    this._params = params
  }

  static create(props: RequestProps) {
    const request = new Request(props)
    return request
  }
}
