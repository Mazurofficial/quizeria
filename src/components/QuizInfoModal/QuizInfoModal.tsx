import { getQuizById } from '../../api';
import { useAppSelector } from '../../app/hooks';
import { selectActiveQuizId } from '../../features/activeQuiz/activeQuiz-slice';
import { quizes } from '../../mock';
import styles from './QuizInfoModal.module.scss';

export const QuizInfoModal = () => {
   const quizId = useAppSelector(selectActiveQuizId);
   const { img, category, title, difficulty, type, description } = getQuizById(
      quizes,
      quizId
   );

   return (
      <div className={styles.quizInfoModal}>
         <img src={img} alt={title} />
         <h3>{title}</h3>
      </div>
   );
};
