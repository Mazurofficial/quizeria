import { useAppSelector } from '../../app/hooks';
import { selectUserAnswers } from '../../features/activeQuiz/activeQuiz-slice';
import { Answer } from '../../types';
import styles from './ResultsContainer.module.scss';

interface ResultsContainerProps {}

export const ResultsContainer = ({}: ResultsContainerProps) => {
   const userAnswers: Answer[] = useAppSelector(selectUserAnswers);

   return <div className={styles.resultsContainer}>{userAnswers}</div>;
};
