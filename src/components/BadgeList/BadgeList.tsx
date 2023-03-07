import { useAppDispatch } from '../../app/hooks';
import { addFilter } from '../../features/cardsFilter/cardsFilter-slice';
import { Badge } from '../../ui/Badge/Badge';
import styles from './BadgeList.module.scss';

interface BadgeListProps {
   badges: string[];
}

export const BadgeList = ({ badges }: BadgeListProps) => {
   const dispatch = useAppDispatch();

   return (
      <div className={styles.badgeList}>
         {badges.map((badge) => {
            return (
               <div key={badge} onClick={(e) => e.stopPropagation()}>
                  <Badge
                     title={badge}
                     onClick={() => dispatch(addFilter(badge))}
                  />
               </div>
            );
         })}
      </div>
   );
};
