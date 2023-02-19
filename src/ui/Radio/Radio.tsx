import { useEffect } from 'react';
import { AnswerType, VariantType } from '../../types';
import styles from './Radio.module.scss';

interface RadioProps {
   variant: VariantType;
   setAnswer: React.Dispatch<React.SetStateAction<AnswerType>>;
   checkedId: string;
   setCheckedId: React.Dispatch<React.SetStateAction<string>>;
}

export const Radio = ({
   variant,
   setAnswer,
   checkedId,
   setCheckedId,
}: RadioProps) => {
   const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedId(e.target.id);
      const userAnswer: AnswerType = [e.target.id, e.target.value];
      setAnswer(userAnswer);
      console.log(variant.id);
   };

   useEffect(() => {
      setCheckedId('');
   }, [variant, setCheckedId]);

   return (
      <label
         className={
            checkedId === variant.id
               ? `${styles.container} ${styles.checked}`
               : styles.container
         }
      >
         <span className={styles.letter}>{variant.id}</span>
         <span className={styles.variant}>{variant.text}</span>
         <input
            type="radio"
            value={variant.text}
            id={variant.id}
            name="variant"
            onChange={onOptionChange}
            checked={checkedId === variant.id}
         />
      </label>
   );
};
