import { ChangeEventHandler } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { useAppDispatch } from '../../../app/hooks';
import { selectSearch, setSearch } from '../cardSearch-slice';
import styles from './CardsSearchPanel.module.scss';
import { ReactComponent as DefaultSearchIcon } from './SearchIcon/Vector.svg';



export const SearchPanel = () => {
   const search = useAppSelector(selectSearch);
   const dispatch = useAppDispatch();

   const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setSearch(e.target.value));
   };

   return (
      <div className={styles.wrapper}>
         <DefaultSearchIcon className={styles.searchIcon}/>
         <input
         placeholder=''
         type="text"
         className={styles.search}
         value={search}
         onChange={handleSearch}
      />
      </div>
      
   );
};
