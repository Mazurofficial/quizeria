import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';
import { AnswerType, QuestionType } from '../../types';

interface activeQuizState {
    id: string,
    questions: QuestionType[],
    activeQuestion: QuestionType["id"],
    userAnswers: AnswerType[],
    rightAnswers: AnswerType[],
    checkedAnswers: AnswerType[]
    rightUserAnswersAmount: number,
    quizProgress: number
}

const initialState: activeQuizState = {
    id: '1',
    activeQuestion: 0,
    questions: [],
    userAnswers: [],
    rightAnswers: [],
    checkedAnswers: [],
    rightUserAnswersAmount: 0,
    quizProgress: 0
}

// helper for checking right Answers
function arrayEquals(userAnswer: AnswerType, rightAnswer: AnswerType) {
    return Array.isArray(userAnswer) &&
      Array.isArray(rightAnswer) &&
      userAnswer.length === rightAnswer.length &&
      userAnswer.every((val, index) => val === rightAnswer[index]);
}

// checks user's answers
const checkAnswers = (userAnswers: AnswerType[], rightAnswers: AnswerType[]) => {
    const checkedAnswers: AnswerType[] = userAnswers.map((userAnswer,index)=>{
        if (arrayEquals(userAnswer,rightAnswers[index])) {
            return [...userAnswer]
        } else {
            return ['','Wrong']
        }
    })
    const usersRightAnswers: AnswerType[] = userAnswers.filter((userAnswer, index) => {
        return arrayEquals(userAnswer,rightAnswers[index])
    })
    const usersRightAnswersAmount = usersRightAnswers.length
    return {checkedAnswers,usersRightAnswersAmount}
}

const activeQuizSlice = createSlice({
    name: '@@active-quiz',
    initialState,
    reducers: {
        setQuizId: (state,action)=>{
            state.id = action.payload
        },
        setActiveQuiz: (state, action) => {
            state.questions = action.payload.questions
            state.rightAnswers = action.payload.answers
            state.checkedAnswers = []
            state.rightUserAnswersAmount = 0
            state.quizProgress = (state.activeQuestion/state.questions.length)*100
        },
        answearQuestion: (state, action) => {
            state.activeQuestion = state.activeQuestion + 1
            state.userAnswers.push(action.payload)
            state.quizProgress = (state.activeQuestion/state.questions.length)*100
        },
        finishQuiz: (state,action) => {
            state.id = '1'
            state.activeQuestion = 0
            state.questions = []
            state.userAnswers.push(action.payload)
            state.quizProgress = 100
            state.checkedAnswers = checkAnswers(state.userAnswers,state.rightAnswers).checkedAnswers
            state.rightUserAnswersAmount = checkAnswers(state.userAnswers,state.rightAnswers).usersRightAnswersAmount
            state.userAnswers = []
        }
    }
})

export const {setQuizId,setActiveQuiz,answearQuestion,finishQuiz} = activeQuizSlice.actions
export const activeQuizReducer = activeQuizSlice.reducer

export const selectActiveQuizId = (state: RootState) => state.activeQuiz.id
export const selectActiveQuestion = (state: RootState) => {
        return state.activeQuiz.questions[state.activeQuiz.activeQuestion]
}
export const selectQuizProgress = (state: RootState) => state.activeQuiz.quizProgress
export const selectUserAnswers = (state: RootState) => state.activeQuiz.userAnswers
export const selectCheckedUserAnswers = (state: RootState) => state.activeQuiz.checkedAnswers
export const selectRightUserAnswersAmount = (state: RootState) => state.activeQuiz.rightUserAnswersAmount
export const selectQuestionsAmount = (state: RootState) => state.activeQuiz.questions.length