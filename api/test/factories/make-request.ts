import { Field } from 'src/modules/accounts/domain/user/value-objects/field';
import { RequestProps } from 'src/modules/accounts/domain/user/value-objects/request';
import { Request } from 'src/modules/accounts/domain/user/value-objects/request';

export function makeRequest(override: Partial<RequestProps> = {}) {
  const request = Request.create({
    params: [Field.create({ name: 'id', type: 'string/uuid' })],
    type: 'body',
    accessType: null,
    ...override,
  });

  return request;
}
