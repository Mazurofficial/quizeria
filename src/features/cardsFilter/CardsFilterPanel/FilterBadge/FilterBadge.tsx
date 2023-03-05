import { useAppDispatch } from '../../../../app/hooks';
import { removeFilter } from '../../cardsFilter-slice';
import styles from './FilterBadge.module.scss';
import { ReactComponent as DefaultCloseIcon } from './closeImg/default.svg';

interface FilterBadgeProps {
   title: string;
}

export const FilterBadge = ({ title }: FilterBadgeProps) => {
   const dispatch = useAppDispatch();

   return (
      <div className={styles.badge}>
         {title.charAt(0).toUpperCase() + title.slice(1)}
         <span onClick={() => dispatch(removeFilter(title))}>
            <DefaultCloseIcon />
         </span>
      </div>
   );
};
