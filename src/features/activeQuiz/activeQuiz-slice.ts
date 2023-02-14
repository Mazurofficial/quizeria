import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';
import { Answer, Question } from '../../types';

interface activeQuizState {
    id: number | null,
    questions: Question[],
    activeQuestion: Question["id"],
    userAnswers: Answer[],
    rightAnswers: Answer[],
    checkedAnswers: Answer[]
    rightUserAnswersAmount: number | null,
    watchStart: boolean
}

const initialState: activeQuizState = {
    id: 1,
    activeQuestion: 0,
    questions: [],
    userAnswers: [],
    rightAnswers: [],
    checkedAnswers: [],
    rightUserAnswersAmount: null,
    watchStart: false
}

// helper for checking right Answers
function arrayEquals(userAnswer: Answer, rightAnswer: Answer) {
    return Array.isArray(userAnswer) &&
      Array.isArray(rightAnswer) &&
      userAnswer.length === rightAnswer.length &&
      userAnswer.every((val, index) => val === rightAnswer[index]);
}

// checks user's answers
const checkAnswers = (userAnswers: Answer[], rightAnswers: Answer[]) => {
    const checkedAnswers: Answer[] = userAnswers.map((userAnswer,index)=>{
        if (arrayEquals(userAnswer,rightAnswers[index])) {
            return [...userAnswer]
        } else {
            return ['','Wrong']
        }
    })
    const usersRightAnswers: Answer[] = userAnswers.filter((userAnswer, index) => {
        return arrayEquals(userAnswer,rightAnswers[index])
    })
    const usersRightAnswersAmount = usersRightAnswers.length
    return {checkedAnswers,usersRightAnswersAmount}
}

const activeQuizSlice = createSlice({
    name: '@@active-quiz',
    initialState,
    reducers: {
        setActiveQuiz: (state, action) => {
            state.questions = action.payload.questions
            state.rightAnswers = action.payload.answers
            state.checkedAnswers = []
            state.rightUserAnswersAmount = null
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
            state.checkedAnswers = checkAnswers(state.userAnswers,state.rightAnswers).checkedAnswers
            state.rightUserAnswersAmount = checkAnswers(state.userAnswers,state.rightAnswers).usersRightAnswersAmount
            state.userAnswers = []
        }
    }
})

export const {setActiveQuiz,answearQuestion,finishQuiz} = activeQuizSlice.actions
export const activeQuizReducer = activeQuizSlice.reducer

export const selectActiveQuestion = (state: RootState) => {
        return state.activeQuiz.questions[state.activeQuiz.activeQuestion]
}

export const selectUserAnswers = (state: RootState) => state.activeQuiz.userAnswers
export const selectCheckedUserAnswers = (state: RootState) => state.activeQuiz.checkedAnswers
export const selectRightUserAnswersAmount = (state: RootState) => state.activeQuiz.rightUserAnswersAmount