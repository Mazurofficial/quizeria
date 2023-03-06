import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchSlice = {
    search: string
}

const initialState: SearchSlice ={
    search: '',
}

const cardsSearchSlice = createSlice({
    name: '@@cards-search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        }
    }
})

export const {setSearch} = cardsSearchSlice.actions
export const cardsSearchReducer = cardsSearchSlice.reducer

export const selectSearch = (state: RootState) => state.search