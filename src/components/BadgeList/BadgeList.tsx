import { Badge } from '../Badge/Badge';
import styles from './BadgeList.module.scss';

interface BadgeListProps {
   badges: string[];
}

export const BadgeList = ({ badges }: BadgeListProps) => {
   return (
      <div className={styles.badgeList}>
         {badges.map((badge) => {
            return <Badge title={badge} />;
         })}
      </div>
   );
};
