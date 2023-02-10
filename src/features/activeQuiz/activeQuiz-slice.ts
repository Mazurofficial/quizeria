import { createSlice } from '@reduxjs/toolkit';
import { Answer, Question } from '../../types';

interface activeQuizState {
    id: number | null,
    questions: Question[],
    activeQuestion: Question["id"] | null,
    userAnswers: Answer[],
    rightAnswersAmount: number | null,
}

const initialState: activeQuizState = {
    id: 1,
    activeQuestion: null,
    questions: [],
    userAnswers: [],
    rightAnswersAmount: null
}

const activeQuizSlice = createSlice({
    name: '@@active-quiz',
    initialState,
    reducers: {
        setActiveQuiz: (state, action) => {
            state.id = action.payload
        },
        nextQuestion: (state) => {
            if (state.activeQuestion)
                state.activeQuestion = state.activeQuestion + 1
        },
        answearQuestion: (state, action) => {
            state.userAnswers.push(action.payload)
        },
        finishQuiz: (state) => {
            state = initialState
        }
    }
})