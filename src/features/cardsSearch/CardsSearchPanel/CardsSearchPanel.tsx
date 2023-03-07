import { ChangeEventHandler } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { useAppDispatch } from '../../../app/hooks';
import { selectSearch, setSearch } from '../cardSearch-slice';
import styles from './CardsSearchPanel.module.scss';

export const SearchPanel = () => {
   const search = useAppSelector(selectSearch);
   const dispatch = useAppDispatch();

   const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setSearch(e.target.value));
   };

   return (
      <input
         placeholder="Search"
         type="text"
         className={styles.search}
         value={search}
         onChange={handleSearch}
      />
   );
};
