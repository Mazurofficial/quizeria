import { useAppSelector } from '../../app/hooks';
import { quizes } from '../../mock';
import { QuizType } from '../../types';
import { QuizCard } from '../QuizCard';
import styles from './CardList.module.scss';

interface CardListProps {}

export const CardList = ({}: CardListProps) => {
   const quizList = quizes;
   return (
      <>
         {quizList.map((quiz) => {
            return <QuizCard {...quiz} />;
         })}
      </>
   );
};
