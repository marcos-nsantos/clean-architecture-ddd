import { expect, test } from "vitest";
import { AnswerQuestion } from "./answer-question";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestion();

  const answer = answerQuestion.execute({
    instructorId: "1",
    questionId: "1",
    content: "Nova resposta",
  });

  expect(answer.content).toBe("Nova resposta");
});
