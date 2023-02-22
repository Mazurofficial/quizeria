export type QuizType = {
    id: number,
    img: string,
    title: string,
    description: string,
    questions: QuestionType[],
    difficulty: 'easy' | 'medium' | 'hard',
    category: 'films' | 'series' | 'games' | 'animated films'
    type: 'classic' | 'interactive' | 'true/false' | 'image' | 'audio',
    answers: AnswerType[]
}

export type QuestionType = {
    id: number,
    title: string,
    type: 'classic' | 'true/false' | 'image' | 'audio',
    img_url?: string,
    variants: VariantType[],
    answer: AnswerType,
    isLast: boolean
}

export type VariantType = {
    id: string,
    text?: string,
    imgUrl?: string,
    audioUrl?: string
}

export type AnswerType = [VariantType["id"],VariantType["text"]]