import { quizes } from '../../mock';
import { QuizCard } from '../QuizCard';
import styles from './CardList.module.scss';

export const CardList = () => {
   const quizList = quizes;
   return (
      <div className={styles.cardList}>
         {quizList.map((quiz) => {
            return <QuizCard {...quiz} />;
         })}
      </div>
   );
};
