import { ResponseProps } from 'src/modules/accounts/domain/user/value-objects/response';
import { Response } from 'src/modules/accounts/domain/user/value-objects/response';

export function makeResponse(override: Partial<ResponseProps> = {}) {
  const response = Response.create({
    type: 'success',
    statusCode: 201,
    description: 'Created a user successfully',
    response: [],
    message: null,
    ...override,
  });

  return response;
}
