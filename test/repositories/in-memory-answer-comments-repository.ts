import { AnswerCommentsRepository } from "../../src/domain/forum/application/repositories/answer-comment-repository";
import { AnswerComment } from "../../src/domain/forum/enterprise/entities/answer-comment";
import { PaginationParams } from "@/core/repositories/pagination-params";

export class InMemoryAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  public items: AnswerComment[] = [];

  async findById(id: string) {
    const answerComment = this.items.find((item) => item.id.toString() === id);
    return answerComment || null;
  }

  async findManyByAnswerId(answerId: string, { page }: PaginationParams) {
    return this.items
      .filter((item) => item.answerId.toString() === answerId)
      .slice((page - 1) * 20, page * 20);
  }

  async create(answerComment: AnswerComment) {
    this.items.push(answerComment);
  }

  async delete(answerComment: AnswerComment) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === answerComment.id,
    );
    this.items.splice(itemIndex, 1);
  }
}
