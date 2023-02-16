import { QuestionContainer } from '../../components/Question';
import styles from './QuizPage.module.scss';
import { quizes } from '../../mock';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
   selectActiveQuestion,
   selectQuizProgress,
   setActiveQuiz,
} from '../../features/activeQuiz/activeQuiz-slice';
import { useEffect } from 'react';
import { getQuizById } from '../../api';
import { ProgressBar } from '../../ui/ProgressBar';

export const QuizPage = () => {
   const activeQuiz = getQuizById(quizes, 1);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setActiveQuiz(activeQuiz));
   }, [dispatch, activeQuiz]);

   const activeQuestion = useAppSelector(selectActiveQuestion);
   const quizProgress = useAppSelector(selectQuizProgress);

   return (
      <div className={styles.quizPage}>
         {activeQuestion && (
            <>
               <ProgressBar completed={quizProgress} />
               <QuestionContainer
                  isLast={activeQuestion.isLast}
                  title={activeQuestion.title}
                  variants={activeQuestion.variants}
               />
            </>
         )}
      </div>
   );
};
