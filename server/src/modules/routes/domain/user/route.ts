import { Response } from './value-objects/response';
import { Request } from './value-objects/request';
import { Entity } from 'src/@core/entities/entity';

export interface RouteProps {
  method: 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  responses: Response[];
  request: Request;
}

export class Route extends Entity<RouteProps> {
  static create(props: RouteProps, id?: string) {
    const route = new Route(props, id);

    return route;
  }
}
