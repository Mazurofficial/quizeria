import { useEffect, useState } from 'react';
import { AnswerType, QuestionType, VariantType } from '../../types';
import { Radio } from '../../ui/Radio';
import styles from './VariantsList.module.scss';

interface VariantsListProps {
   variants: VariantType[];
   questionType: QuestionType['type'];
   setAnswer: React.Dispatch<React.SetStateAction<AnswerType>>;
}

export const VariantsList = ({
   variants,
   questionType,
   setAnswer,
}: VariantsListProps) => {
   const [checkedId, setCheckedId] = useState('');
   const [listClass, setListClass] = useState(`${styles.variantsList}`);

   useEffect(() => {
      if (questionType === 'classic') {
         setListClass(`${styles.variantsList} ${styles.classic}`);
      } else if (questionType === 'image') {
         setListClass(`${styles.variantsList} ${styles.image}`);
      }
   }, [questionType]);

   return (
      <div className={listClass}>
         {variants.map((variant) => (
            <Radio
               key={variant.id}
               variant={variant}
               setAnswer={setAnswer}
               checkedId={checkedId}
               setCheckedId={setCheckedId}
            />
         ))}
      </div>
   );
};
