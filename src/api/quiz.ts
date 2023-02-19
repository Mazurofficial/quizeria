import { QuizType } from "../types";

export const getQuizById = (quizes: QuizType[], id: QuizType["id"]) => {
    const quiz = quizes.filter(quiz => quiz.id === id)
    return quiz[0]
}