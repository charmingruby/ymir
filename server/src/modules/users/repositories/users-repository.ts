export interface UsersRepository<T> {
  create(): Promise<T>;
}
