import { ChangeEventHandler } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { useAppDispatch } from '../../../app/hooks';
import { selectSearch, setSearch } from '../cardSearch-slice';
import styles from './CardsSearchPanel.module.scss';

type onSearch = ChangeEventHandler<HTMLInputElement>;

export const SearchPanel = (): [string, onSearch] => {
   const search = useAppSelector(selectSearch);
   const dispatch = useAppDispatch();

   const handleSearch: onSearch = (e) => {
      dispatch(setSearch(e.target.value));
   };

   return <div></div>;
};
