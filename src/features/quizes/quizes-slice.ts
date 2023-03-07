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

export const selectVisibleQuizes = (state: RootState, filters: string[] = [], search: string) => {
    
    if (filters.length === 0 && search === ''){
        return state.quizes
    }
    const filteredQuizes = state.quizes.filter((quiz) => {
        const quizFilters: string[] = [quiz.category,quiz.difficulty,quiz.type]
        console.log(quizFilters)
        return filters.every((filter) => quizFilters.includes(filter));
    })
    const visibleQuizes = filteredQuizes.filter((quiz) => {
        return quiz.title.toLowerCase().includes(search.toLowerCase())
    })
    return visibleQuizes
}