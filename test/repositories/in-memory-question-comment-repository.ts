import { QuestionCommentRepository } from "../../src/domain/forum/application/repositories/question-comment-repository";
import { QuestionComment } from "../../src/domain/forum/enterprise/entities/question-comment";

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentRepository
{
  public items: QuestionComment[] = [];

  async findById(id: string) {
    const questionComment = this.items.find(
      (item) => item.id.toString() === id,
    );
    return questionComment || null;
  }

  async create(questionComment: QuestionComment) {
    this.items.push(questionComment);
  }

  async delete(questionComment: QuestionComment) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === questionComment.id,
    );
    this.items.splice(itemIndex, 1);
  }
}
