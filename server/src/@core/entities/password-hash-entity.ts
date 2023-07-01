import { hash, compare } from 'bcryptjs';

export class PasswordHashEntity {
  private _password: string;

  private async generateHash(password: string) {
    this._password = await hash(password, 6);
  }

  get passwordHash() {
    return this._password;
  }

  public compareHash(passwordToCompare: string): Promise<boolean> {
    return compare(passwordToCompare, this._password);
  }

  constructor(password: string) {
    this.generateHash(password);
  }
}
