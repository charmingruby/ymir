import { Field } from "./field";

export interface ResponseProps {
  type: 'success' | 'error'
  description: string
  message?: string | null;
  statusCode: number;
  content: Field[];
}

export class Response {
  private _type: 'success' | 'error'
  private _message: string  | null;
  private _statusCode: number;
  private _content: Field[];
  private _description: string;

   type() {
    return this._type;
  }

  get message() {
    return this._message;
  }

  get content() {
    return this._content;
  }

  get statusCode() {
    return this._statusCode;
  }

  get description() {
    return this._description;
  }

  private validateStatusCode(statusCode: number) {
    if(statusCode < 100 || statusCode > 599) {
      throw new Error(`Invalid status code: ${statusCode}.`);
    }

    return statusCode
  }

  private constructor({statusCode = 200, message, type = 'success', content, description}: ResponseProps) {
    this._statusCode = this.validateStatusCode(statusCode)
    this._description = this.description
    this._type = type
    this._message = message ?? null
    this._content = content ?? []
  }

  static create(props: ResponseProps) {
    const response = new Response(props)
    return response
  }
}
