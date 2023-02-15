import { activeQuizReducer } from './../features/activeQuiz/activeQuiz-slice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { loadState, saveState } from './hooks';
import throttle from 'lodash/throttle';

const persistedStore = loadState()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    activeQuiz: activeQuizReducer
  },
  preloadedState: persistedStore,
  devTools: true
});

store.subscribe(
  throttle(() => {
     saveState(store.getState());
  }, 1000)
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
