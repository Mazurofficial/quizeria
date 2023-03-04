import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";


const initialState: string[] = []

const cardsFilterSlice = createSlice({
    name: '@@cards-filter',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            if (!state.includes(action.payload.toLowerCase())) {
               state.push(action.payload.toLowerCase());
            }
         },
         removeFilter: (state, action) => state.filter((item) => item !== action.payload),
         clearFilters: () => []
    }
})

export const {addFilter,clearFilters,removeFilter} = cardsFilterSlice.actions
export const cardsFilterReducer = cardsFilterSlice.reducer

export const selectFilters = (state: RootState) => state.filters