import styles from './Badge.module.scss';

interface BadgeProps {
   title: string;
   onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Badge = ({ title, onClick }: BadgeProps) => {
   return (
      <div className={styles.badge} onClick={(e) => e.stopPropagation()}>
         {title}
      </div>
   );
};
