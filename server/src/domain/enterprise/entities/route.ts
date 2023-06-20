import { Entity } from "core/entities/entity";
import { Response } from "./value-objects/response";

export interface RouteProps {
  method: 'POST' |'GET' | 'PATCH' | 'PUT' | 'DELETE'
  path: string
  summary: string
  description: string,


  responses: Response[]

  // request: Request
  // response: Response

  // use case id
}

export class Route extends Entity<RouteProps>{

}
