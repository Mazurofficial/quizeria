import styles from './Badge.module.scss';

interface BadgeProps {
   title: string;
}

export const Badge = ({ title }: BadgeProps) => {
   return <div className={styles.badge}>{title}</div>;
};
