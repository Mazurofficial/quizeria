import { Question } from '../../types';
import styles from './Question.module.scss';

interface QuestionProps
   extends Pick<Question, 'title' | 'variants' | 'img_url'> {}

export const QuestionContainer = ({
   title,
   variants,
   img_url,
}: QuestionProps) => {
   return (
      <div className={styles.question}>
         <>
            <h2>{title}</h2>
            {img_url && <img src={img_url} />}
            {variants.map((variant) => (
               <li key={variant.id}>{variant.text}</li>
            ))}
         </>
      </div>
   );
};
