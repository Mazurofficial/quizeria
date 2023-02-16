import { useEffect, useState } from 'react';
import { Answer, Variant } from '../../types';
import styles from './Radio.module.scss';

interface RadioProps {
   variant: Variant;
   setAnswer: React.Dispatch<React.SetStateAction<Answer>>;
}

export const Radio = ({ variant, setAnswer }: RadioProps) => {
   const [checkedId, setCheckedId] = useState('');

   const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedId(e.target.id);
      const userAnswer: Answer = [e.target.id, e.target.value];
      setAnswer(userAnswer);
   };

   useEffect(() => {
      setCheckedId('');
   }, [variant]);

   return (
      <label className={styles.container}>
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
