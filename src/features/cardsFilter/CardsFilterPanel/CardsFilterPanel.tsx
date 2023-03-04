import { useAppSelector } from '../../../app/hooks';
import { useAppDispatch } from '../../../app/hooks';
import { Badge } from '../../../components/Badge';
import { Button } from '../../../ui/Button';
import { clearFilters, selectFilters } from '../cardsFilter-slice';
import styles from './CardsFilterPanel.module.scss';

export const FilterPanel = () => {
   const filters = useAppSelector(selectFilters);
   const dispatch = useAppDispatch();

   return filters.length === 0 ? null : (
      <div className={styles.filterPanel}>
         <div className={styles.filterPanel_badges}>
            {filters.map((filter) => {
               return <Badge title={filter} />;
            })}
         </div>
         <Button isLink={false} onClick={() => dispatch(clearFilters())}>
            Clear Filter
         </Button>
      </div>
   );
};
