import { Quiz } from "../types";

export const getQuizById = (quizes: Quiz[], id: Quiz["id"]) => {
    const quiz = quizes.filter(quiz => quiz.id === id)
    return quiz[0]
}