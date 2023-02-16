import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
   answearQuestion,
   finishQuiz,
} from '../../features/activeQuiz/activeQuiz-slice';
import { Answer, Question } from '../../types';
import { Button } from '../../ui/Button';
import { VariantsList } from '../VariantsList';
import styles from './Question.module.scss';

interface QuestionProps
   extends Pick<Question, 'title' | 'variants' | 'img_url' | 'isLast'> {}

export const QuestionContainer = ({
   title,
   variants,
   img_url,
   isLast,
}: QuestionProps) => {
   const dispatch = useAppDispatch();
   const [answer, setAnswer] = useState<Answer>(['', '']);

   const answerTheQuestion = () => {
      if (isLast) {
         setAnswer(['', '']);
         return dispatch(finishQuiz(answer));
      } else {
         setAnswer(['', '']);
         return dispatch(answearQuestion(answer));
      }
   };

   return (
      <div className={styles.question}>
         <>
            <h2>{title}</h2>
            {img_url && <img alt={img_url} src={img_url} />}
            <VariantsList variants={variants} setAnswer={setAnswer} />
            {isLast ? (
               <Button onClick={answerTheQuestion}>Finish Quiz</Button>
            ) : (
               <Button onClick={answerTheQuestion}>Next question</Button>
            )}
         </>
      </div>
   );
};
