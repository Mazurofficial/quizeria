import { useAppSelector } from '../../app/hooks';
import { selectFilters } from '../../features/cardsFilter/cardsFilter-slice';
import { selectVisibleQuizes } from '../../features/quizes/quizes-slice';
import { QuizCard } from '../QuizCard';
import styles from './CardList.module.scss';

export const CardList = () => {
   const filters = useAppSelector(selectFilters);
   const quizList = useAppSelector((state) =>
      selectVisibleQuizes(state, filters)
   );

   return (
      <>
         <div className={styles.cardList} id="quizes">
            {quizList.map((quiz) => {
               return <QuizCard {...quiz} />;
            })}
         </div>
      </>
   );
};
