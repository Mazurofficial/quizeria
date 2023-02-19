import { useState } from 'react';
import { AnswerType, VariantType } from '../../types';
import { Radio } from '../../ui/Radio';
import styles from './VariantsList.module.scss';

interface VariantsListProps {
   variants: VariantType[];
   setAnswer: React.Dispatch<React.SetStateAction<AnswerType>>;
}

export const VariantsList = ({ variants, setAnswer }: VariantsListProps) => {
   const [checkedId, setCheckedId] = useState('');

   return (
      <div className={styles.variantsList}>
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
