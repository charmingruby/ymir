import { UniqueEntityID } from "./unique-entity-id";

export class Entity<Props> {
    private _id: UniqueEntityID
    public props: Props

    get id() {
        return this._id
    }

    constructor(props: Props, id?: string) {
        this._id = new UniqueEntityID(id)
        this.props = props
    }
}