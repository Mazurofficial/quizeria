import { ChangeEventHandler, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { useAppDispatch } from '../../../app/hooks';
import { selectSearch, setSearch } from '../cardSearch-slice';
import styles from './CardsSearchPanel.module.scss';
import { ReactComponent as DefaultSearchIcon } from './SearchIcon/Vector.svg';

export const SearchPanel = () => {
   const search = useAppSelector(selectSearch);
   const dispatch = useAppDispatch();
   const [iconVisible, setIconVisible] = useState(true);

   const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setSearch(e.target.value));
   };

   return (
      <div className={styles.wrapper}>
         <DefaultSearchIcon
            className={
               iconVisible
                  ? styles.searchIcon
                  : `${styles.searchIcon} ${styles.notVisible}`
            }
         />
         <input
            type="text"
            className={styles.search}
            value={search}
            onChange={handleSearch}
            onFocus={() => setIconVisible(false)}
            onBlur={() => setIconVisible(true)}
         />
      </div>
   );
};
