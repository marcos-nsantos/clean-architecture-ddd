import { UniqueEntityID } from "./unique-entity-id";

export class Entity<Props> {
  protected props: Props;
  private readonly _id: UniqueEntityID;

  protected constructor(props: any, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID(id);
  }

  get id() {
    return this._id;
  }
}
