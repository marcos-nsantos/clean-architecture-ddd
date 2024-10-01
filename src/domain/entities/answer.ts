import { Entity } from "../../core/entities/entitiy";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

interface AnswerProps {
  authorId: UniqueEntityID;
  questionId: UniqueEntityID;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content;
  }

  static create(
    props: Optional<AnswerProps, "createdAt">,
    id?: UniqueEntityID,
  ) {
    return new Answer(props, id);
  }
}
