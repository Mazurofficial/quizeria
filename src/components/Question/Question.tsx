import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
   answearQuestion,
   finishQuiz,
} from '../../features/activeQuiz/activeQuiz-slice';
import { Question } from '../../types';
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
   const [answer, setAnswer] = useState('');

   const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAnswer(e.target.id);
   };

   const answerTheQuestion = () => {
      if (isLast) {
         setAnswer('');
         return dispatch(finishQuiz(answer));
      } else {
         setAnswer('');
         return dispatch(answearQuestion(answer));
      }
   };

   return (
      <div className={styles.question}>
         <>
            <h2>{title}</h2>
            {img_url && <img alt={img_url} src={img_url} />}
            {variants.map((variant) => (
               <div key={variant.id}>
                  <input
                     type="radio"
                     value={variant.text}
                     id={variant.id.toString()}
                     name="question"
                     onChange={onOptionChange}
                     checked={answer === variant.id.toString()}
                  />
                  <label htmlFor={variant.id.toString()}>{variant.text}</label>
               </div>
            ))}
            {isLast ? (
               <button onClick={answerTheQuestion}>Finish Quiz</button>
            ) : (
               <button onClick={answerTheQuestion}>Next Question</button>
            )}
         </>
      </div>
   );
};
