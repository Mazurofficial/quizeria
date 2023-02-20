import { QuizType } from '../../types';
import { BadgeList } from '../BadgeList';
import styles from './QuizCard.module.scss';

interface QuizCardProps
   extends Pick<QuizType, 'title' | 'difficulty' | 'category' | 'type'> {}

export const QuizCard = ({
   title,
   difficulty,
   category,
   type,
}: QuizCardProps) => {
   const badges = [difficulty, category, type].map(
      (badge) => badge.charAt(0).toUpperCase() + badge.slice(1)
   );

   return (
      <div className={styles.quizCard}>
         <img src="img_url" alt="#das" />
         <h3>{title}</h3>
         <BadgeList badges={badges} />
      </div>
   );
};
