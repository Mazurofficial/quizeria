import { useAppDispatch } from '../../app/hooks';
import { setQuizId } from '../../features/activeQuiz/activeQuiz-slice';
import { openModal } from '../../features/modalWindow/modalWindow-slice';
import { QuizType } from '../../types';
import { BadgeList } from '../BadgeList';
import styles from './QuizCard.module.scss';

interface QuizCardProps
   extends Pick<
      QuizType,
      'title' | 'difficulty' | 'category' | 'type' | 'img' | 'id'
   > {}

export const QuizCard = ({
   id,
   title,
   img,
   difficulty,
   category,
   type,
}: QuizCardProps) => {
   const badges = [difficulty, category, type].map(
      (badge) => badge.charAt(0).toUpperCase() + badge.slice(1)
   );

   const dispatch = useAppDispatch();

   const handleCard = () => {
      dispatch(setQuizId(id));
      dispatch(openModal());
   };

   return (
      <div className={styles.quizCard} onClick={handleCard}>
         <div className={styles.quizCard_Heading}>
            <img src={img} alt={img} />
            <h3>{title}</h3>
         </div>
         <div className={styles.quizCard_Badges}>
            <BadgeList badges={badges} />
         </div>
      </div>
   );
};
