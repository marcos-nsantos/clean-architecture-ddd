import { QuestionsRepository } from "../../src/domain/forum/application/repositories/question-repository";
import { Question } from "../../src/domain/forum/enterprise/entities/question";

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = [];

  async create(question: Question) {
    this.items.push(question);
  }
}
