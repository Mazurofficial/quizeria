import { useAppSelector } from '../../app/hooks';
import {
   selectRightUserAnswers,
   selectRightUserAnswersAmount,
   selectUserAnswers,
} from '../../features/activeQuiz/activeQuiz-slice';
import { Answer } from '../../types';
import styles from './ResultsContainer.module.scss';

// interface ResultsContainerProps {}

export const ResultsContainer = () => {
   const userAnswers: Answer[] = useAppSelector(selectUserAnswers);
   const userRightAnswers: Answer[] = useAppSelector(selectRightUserAnswers);
   const userRightAnswersAmount = useAppSelector(selectRightUserAnswersAmount);

   return (
      <div className={styles.resultsContainer}>
         <h2>All user answers</h2>
         {userAnswers}
         <h2>Right user answers</h2>
         {userRightAnswers}
         <h2>Right answers amount</h2>
         {userRightAnswersAmount}
      </div>
   );
};
