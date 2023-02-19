import { useAppSelector } from '../../app/hooks';
import {
   selectActiveQuestion,
   selectQuestionsAmount,
} from '../../features/activeQuiz/activeQuiz-slice';
import { AnswerType } from '../../types';
import { VariantsList } from '../VariantsList';
import styles from './Question.module.scss';

interface QuestionProps {
   setAnswer: React.Dispatch<React.SetStateAction<AnswerType>>;
}

export const Question = ({ setAnswer }: QuestionProps) => {
   const activeQuestion = useAppSelector(selectActiveQuestion);
   const questionsAmount = useAppSelector(selectQuestionsAmount);
   return (
      <div className={styles.question}>
         <h2>Question {`${activeQuestion.id}/${questionsAmount}`}</h2>
         <p className={styles.question_Title}>{activeQuestion.title}</p>
         <div className={styles.question_Varints}>
            {activeQuestion.img_url && (
               <img
                  alt={activeQuestion.img_url}
                  src={activeQuestion.img_url}
                  className={styles.question_Image}
               />
            )}
            <VariantsList
               variants={activeQuestion.variants}
               setAnswer={setAnswer}
            />
         </div>
      </div>
   );
};
