import { useAppSelector } from '../../app/hooks';
import { selectFilters } from '../../features/cardsFilter/cardsFilter-slice';
import { selectSearch } from '../../features/cardsSearch/cardSearch-slice';
import { selectVisibleQuizes } from '../../features/quizes/quizes-slice';
import { QuizCard } from '../QuizCard';
import styles from './CardList.module.scss';

export const CardList = () => {
   const filters = useAppSelector(selectFilters);
   const search = useAppSelector(selectSearch);
   const quizList = useAppSelector((state) =>
      selectVisibleQuizes(state, filters, search)
   );

   return (
      <>
         <div className={styles.cardList} id="quizes">
            {quizList.map((quiz) => {
               return <QuizCard key={quiz.id} {...quiz} />;
            })}
         </div>
      </>
   );
};
