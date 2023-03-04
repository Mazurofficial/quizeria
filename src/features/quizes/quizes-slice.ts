import { QuizType } from './../../types/quiz';
import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";


const initialState: QuizType[] = []

const quizesSlice = createSlice({
    name: '@@quizes',
    initialState,
    reducers: {
        addQuizes: (_,action) => action.payload
    }
})

export const {addQuizes} = quizesSlice.actions
export const quizesReducer = quizesSlice.reducer

export const selectVisibleQuizes = (state: RootState, filters: string[] = []) => {
    console.log(filters)
    if (filters.length === 0){
        return state.quizes
    }
    const visibleQuizes = state.quizes.filter((quiz) => {
        const quizFilters: string[] = [quiz.category,quiz.difficulty,quiz.type]
        console.log(quizFilters)
        return filters.every((filter) => quizFilters.includes(filter));
    })
    return visibleQuizes
}