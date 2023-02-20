import { QuestionContainer } from '../../components/QuestionContainer';
import styles from './QuizPage.module.scss';
import { quizes } from '../../mock';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
   selectActiveQuestion,
   setActiveQuiz,
} from '../../features/activeQuiz/activeQuiz-slice';
import { useEffect } from 'react';
import { getQuizById } from '../../api';

export const QuizPage = () => {
   const activeQuiz = getQuizById(quizes, 1);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setActiveQuiz(activeQuiz));
   }, [dispatch, activeQuiz]);

   const activeQuestion = useAppSelector(selectActiveQuestion);

   return (

      <div className={styles.quizPage}>
         <div className={styles.quizPage_logo1}>
            <div className={styles.quizPage_logo2}>
               <h1>Quizeria</h1>
               <div className={styles.quizPage_line}></div>
            </div>
         </div>
         {activeQuestion && <QuestionContainer />}
      </div>
   );
};
