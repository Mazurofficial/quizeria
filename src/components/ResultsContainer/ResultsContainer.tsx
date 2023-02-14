import { useAppSelector } from '../../app/hooks';
import {
   selectCheckedUserAnswers,
   selectRightUserAnswersAmount,
   selectUserAnswers,
} from '../../features/activeQuiz/activeQuiz-slice';
import { Answer } from '../../types';
import styles from './ResultsContainer.module.scss';

// interface ResultsContainerProps {}

export const ResultsContainer = () => {
   const userAnswers: Answer[] = useAppSelector(selectUserAnswers);
   const checkedAnswers: Answer[] = useAppSelector(selectCheckedUserAnswers);
   const userRightAnswersAmount = useAppSelector(selectRightUserAnswersAmount);

   return (
      <div className={styles.resultsContainer}>
         <h2>All user answers</h2>
         {userAnswers.map((answer, index) => {
            if (answer[1]) {
               return (
                  <p key={index}>
                     <span
                        style={{
                           fontWeight: 'bold',
                           marginRight: '10px',
                        }}
                     >
                        {`${index + 1})`}
                     </span>
                     <span
                        style={{
                           marginRight: '5px',
                        }}
                     >
                        {answer[0]}
                     </span>
                     {answer[1]}
                  </p>
               );
            } else {
               return (
                  <p key={index}>
                     <span
                        style={{
                           fontWeight: 'bold',
                           marginRight: '10px',
                        }}
                     >
                        {`${index + 1})`}
                     </span>
                     No answer
                  </p>
               );
            }
         })}
         <h2>Right user answers</h2>
         {checkedAnswers.map((answer, index) => {
            if (answer[1]) {
               return (
                  <p key={index}>
                     <span
                        style={{
                           fontWeight: 'bold',
                           marginRight: '10px',
                        }}
                     >
                        {`${index + 1})`}
                     </span>
                     <span
                        style={{
                           marginRight: '5px',
                        }}
                     >
                        {answer[0]}
                     </span>
                     {answer[1]}
                  </p>
               );
            } else {
               return (
                  <p key={index}>
                     <span
                        style={{
                           fontWeight: 'bold',
                           marginRight: '10px',
                        }}
                     >
                        {`${index + 1})`}
                     </span>
                     No answer
                  </p>
               );
            }
         })}
         <h2>Right answers amount</h2>
         {userRightAnswersAmount}
      </div>
   );
};
