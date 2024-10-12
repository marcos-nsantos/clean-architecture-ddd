import { QuestionsRepository } from "@/domain/forum/application/repositories/question-repository";
import { Question } from "@/domain/forum/enterprise/entities/question";
import { expect, test } from "vitest";
import { CreateQuestionUseCase } from "@/domain/forum/application/use-cases/create-question";

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
};

test("create a question", async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository);

  const { question } = await createQuestion.execute({
    authorId: "1",
    title: "Nova pergunta",
    content: "Conteúdo da pergunta",
  });

  expect(question.id).toBeTruthy();
});
