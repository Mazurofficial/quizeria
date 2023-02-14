import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const loadState = () => {
    try {
       const savedState = localStorage.getItem('state');
       if (savedState === null) {
          return undefined;
       }
       return JSON.parse(savedState);
    } catch (error) {
       console.log(error);
       return undefined;
    }
 };
 
 export const saveState = (state: RootState) => {
    try {
       const stateToBeSaved = JSON.stringify(state);
       localStorage.setItem('state', stateToBeSaved);
    } catch (error) {
       console.log(error);
    }
 };
 