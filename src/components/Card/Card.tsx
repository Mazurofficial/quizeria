import styles from './Card.module.scss';

interface CardProps {}

export const Card = ({}: CardProps) => {
   return <div className={styles.card}>Card Component</div>;
};
