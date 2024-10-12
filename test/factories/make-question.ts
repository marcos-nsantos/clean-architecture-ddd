import {
  Question,
  QuestionProps,
} from "@/domain/forum/enterprise/entities/question";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    authorId: new UniqueEntityID(),
    title: "Example",
    content: "Example content",
    ...override,
  });

  return question;
}
