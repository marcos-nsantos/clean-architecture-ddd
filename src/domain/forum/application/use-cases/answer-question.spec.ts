import { expect, test } from "vitest";
import { AnswerQuestion } from "./answer-question";
import { AnswersRepository } from "@/domain/forum/application/repositories/answers-repository";
import { Answer } from "@/domain/forum/enterprise/entities/answer";

const fakeAnswersRepository: AnswersRepository = {
  create: async (_answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestion(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    instructorId: "1",
    questionId: "1",
    content: "Nova resposta",
  });

  expect(answer.content).toBe("Nova resposta");
});
