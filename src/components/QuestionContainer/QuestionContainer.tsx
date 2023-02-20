import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
   answearQuestion,
   finishQuiz,
   selectActiveQuestion,
   selectQuizProgress,
} from '../../features/activeQuiz/activeQuiz-slice';
import { AnswerType } from '../../types';
import { Button } from '../../ui/Button';
import { ProgressBar } from '../../ui/ProgressBar';
import { Question } from '../Question/Question';
import styles from './QuestionContainer.module.scss';

export const QuestionContainer = () => {
   const dispatch = useAppDispatch();
   const [answer, setAnswer] = useState<AnswerType>(['', '']);
   const quizProgress = useAppSelector(selectQuizProgress);
   const isQuestionLast = useAppSelector(selectActiveQuestion).isLast;

   const answerTheQuestion = () => {
      if (isQuestionLast) {
         setAnswer(['', '']);
         return dispatch(finishQuiz(answer));
      } else {
         setAnswer(['', '']);
         return dispatch(answearQuestion(answer));
      }
   };

   return (
      <div className={styles.container}>
         <ProgressBar completed={quizProgress} />
         <Question setAnswer={setAnswer} />
         {isQuestionLast ? (
            <Button onClick={answerTheQuestion} isLink={true} link="results">
               Finish Quiz
            </Button>
         ) : (
            <Button onClick={answerTheQuestion} isLink={false}>
               Answer question
            </Button>
         )}
      </div>
   );
};
