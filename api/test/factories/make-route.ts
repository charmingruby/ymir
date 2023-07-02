import { RouteProps, Route } from 'src/modules/accounts/domain/user/route';
import { Field } from 'src/modules/accounts/domain/user/value-objects/field';
import { makeRequest } from './make-request';
import { makeResponse } from './make-response';

export function makeRoute(override: Partial<RouteProps> = {}, id?: string) {
  const request = makeRequest({
    accessType: 'POST',
    params: [
      Field.create({ name: 'email', type: 'string' }),
      Field.create({ name: 'password', type: 'string' }),
    ],
  });

  const responses = [
    makeResponse({
      description: 'Invalid token',
      message: 'Invalid credentials',
      response: [],
      statusCode: 401,
      type: 'error',
    }),
    makeResponse(),
  ];

  const route = Route.create(
    {
      method: 'POST',
      path: '/auth',
      description: 'Should be able to auth',
      request,
      responses,
    },
    id,
  );

  return route;
}
