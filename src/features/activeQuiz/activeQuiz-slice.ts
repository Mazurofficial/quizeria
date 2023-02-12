import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';
import { Answer, Question } from '../../types';

interface activeQuizState {
    id: number | null,
    questions: Question[],
    activeQuestion: Question["id"],
    userAnswers: Answer[],
    rightAnswers: Answer[],
    rightUserAnswers: Answer[]
    rightUserAnswersAmount: number | null,
}

const initialState: activeQuizState = {
    id: 1,
    activeQuestion: 0,
    questions: [],
    userAnswers: [],
    rightAnswers: [],
    rightUserAnswers: [],
    rightUserAnswersAmount: null
}

function arrayEquals(a: Answer, b: Answer) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

const checkAnswers = (userAnswers: Answer[], rightAnswers: Answer[]) => {
    const usersRightAnswers = userAnswers.filter((userAnswer, index) => {
        return arrayEquals(userAnswer,rightAnswers[index])
    })
    const usersRightAnswersAmaount = usersRightAnswers.length
    return {usersRightAnswers,usersRightAnswersAmaount}
}

const activeQuizSlice = createSlice({
    name: '@@active-quiz',
    initialState,
    reducers: {
        setActiveQuiz: (state, action) => {
            console.log(action.payload.questions)
            state.questions = action.payload.questions
            state.rightAnswers = action.payload.answers
        },
        answearQuestion: (state, action) => {
            state.activeQuestion = state.activeQuestion + 1
            state.userAnswers.push(action.payload)
        },
        finishQuiz: (state,action) => {
            state.id = 1
            state.activeQuestion = 0
            state.questions = []
            state.userAnswers.push(action.payload)
            state.rightUserAnswers = checkAnswers(state.userAnswers,state.rightAnswers).usersRightAnswers
            state.rightUserAnswersAmount = checkAnswers(state.userAnswers,state.rightAnswers).usersRightAnswersAmaount
        }
    }
})

export const {setActiveQuiz,answearQuestion,finishQuiz} = activeQuizSlice.actions
export const activeQuizReducer = activeQuizSlice.reducer

export const selectActiveQuestion = (state: RootState) => {
        return state.activeQuiz.questions[state.activeQuiz.activeQuestion]
}

export const selectUserAnswers = (state: RootState) => state.activeQuiz.userAnswers
export const selectRightUserAnswers = (state: RootState) => state.activeQuiz.rightUserAnswers
export const selectRightUserAnswersAmount = (state: RootState) => state.activeQuiz.rightUserAnswersAmount