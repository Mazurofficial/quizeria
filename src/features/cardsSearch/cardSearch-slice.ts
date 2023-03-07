import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";



const initialState: string = ''

const cardsSearchSlice = createSlice({
    name: '@@cards-search',
    initialState,
    reducers: {
        setSearch: (_, action) => action.payload
    }
})

export const {setSearch} = cardsSearchSlice.actions
export const cardsSearchReducer = cardsSearchSlice.reducer

export const selectSearch = (state: RootState) => state.search