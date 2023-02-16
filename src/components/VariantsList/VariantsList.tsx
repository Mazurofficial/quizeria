import { Answer, Variant } from '../../types';
import { Radio } from '../../ui/Radio';
import styles from './VariantsList.module.scss';

interface VariantsListProps {
   variants: Variant[];
   setAnswer: React.Dispatch<React.SetStateAction<Answer>>;
}

export const VariantsList = ({ variants, setAnswer }: VariantsListProps) => {
   return (
      <div className={styles.variantsList}>
         {variants.map((variant) => (
            <Radio variant={variant} setAnswer={setAnswer} />
         ))}
      </div>
   );
};
