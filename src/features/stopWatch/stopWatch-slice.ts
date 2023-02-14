import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';

interface stopWatchState {
    isActive: boolean,
    resultTime: number
}

const initialState: stopWatchState = {
    isActive: false,
    resultTime: 0
}

const stopWatchSlice = createSlice({
    name: '@stopWatch',
    initialState,
    reducers: {
        setActive: (state) => {
            state.isActive = true
        },
        setResultTime: (state, action) => {
            state.resultTime = action.payload
        }
    }
})

export const {setActive,setResultTime} = stopWatchSlice.actions
export const stopWatchReducer = stopWatchSlice.reducer

export const selectResultTime = (state: RootState) => state.stopWatch.resultTime
export const selectWatchStatus = (state: RootState) => state.stopWatch.isActive