import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
   answearQuestion,
   finishQuiz,
} from '../../features/activeQuiz/activeQuiz-slice';
import { Answer, Question } from '../../types';
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
   const [chekedId, setChekedId] = useState('');

   const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChekedId(e.target.id);
      const userAnswer: Answer = [e.target.id, e.target.value];
      setAnswer(userAnswer);
   };

   const answerTheQuestion = () => {
      if (isLast) {
         setAnswer(['', '']);
         setChekedId('');
         return dispatch(finishQuiz(answer));
      } else {
         setAnswer(['', '']);
         setChekedId('');
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
                     id={variant.id}
                     name="question"
                     onChange={onOptionChange}
                     checked={chekedId === variant.id}
                  />
                  <label htmlFor={variant.id}>{variant.text}</label>
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
