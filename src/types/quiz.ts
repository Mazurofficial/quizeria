export type Quiz = {
    id: number,
    title: string,
    questions: Question[],
    difficulty: 'easy' | 'medium' | 'hard',
    category: 'films' | 'series' | 'games' | 'animated films'
    type: 'classic' | 'interactive' | 'true/false' | 'image' | 'audio',
    answers: Answer[]
}

export type Question = {
    id: number,
    title: string,
    type: 'classic' | 'true/false' | 'image' | 'audio',
    img_url?: string,
    variants: Variant[],
    answer: Answer,
    isLast: boolean
}

export type Variant = {
    id: number,
    text?: string,
    imgUrl?: string,
    audioUrl?: string
}

export type Answer = Variant["id"]