import { randomUUID } from "node:crypto";

export class Entity<Props> {
  protected props: Props;
  private readonly _id: string;

  constructor(props: any, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  get id() {
    return this._id;
  }
}
