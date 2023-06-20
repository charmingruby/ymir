interface FieldProps {
    name: string;
    type: string;
    description?: string | null;
}

export class Field {
  private _name: string;
  private _type: string;
  private _description: string | null;

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  get description() {
    return this._description;
  }

  private constructor({name, type, description}: FieldProps) {
    this._name = name
    this._type = type
    this._description = description ?? null
  }

  static create(props: FieldProps) {
    return new Field(props)
  }
}
