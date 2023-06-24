export interface UsersRepository {
  create(): Promise<string>;
}
