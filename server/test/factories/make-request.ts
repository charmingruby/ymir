import { Field } from 'domain/enterprise/entities/value-objects/field';
import {
  Request,
  RequestProps,
} from 'domain/enterprise/entities/value-objects/request';

export function makeRequest(override: Partial<RequestProps> = {}) {
  const request = Request.create({
    params: [Field.create({ name: 'id', type: 'string/uuid' })],
    type: 'body',
    accessType: null,
    ...override,
  });

  return request;
}
