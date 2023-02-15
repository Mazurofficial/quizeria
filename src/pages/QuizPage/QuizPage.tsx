import { QuestionContainer } from '../../components/Question';
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
         {activeQuestion && (
            <QuestionContainer
               isLast={activeQuestion.isLast}
               title={activeQuestion.title}
               variants={activeQuestion.variants}
            />
         )}
      </div>
   );
};
