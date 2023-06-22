import { makeRoute } from '../../../../test/factories/make-route'
import { Request } from './value-objects/request'
import { Response } from './value-objects/response'

describe('Route Entity', () => {
  it('should be able to create a route', () => {
    const route = makeRoute({}, 'route-1')

    expect(route.id.toString()).toBe('route-1')
    expect(route.props.responses).toHaveLength(2)
    expect(route.props.responses[0]).toEqual(expect.any(Response))
    expect(route.props.request).toEqual(expect.any(Request))
  })
})
