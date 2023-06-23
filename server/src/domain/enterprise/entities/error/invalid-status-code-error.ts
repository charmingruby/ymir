export class InvalidStatusCodeError extends Error {
  constructor() {
    super('Invalid status code.')
  }
}
