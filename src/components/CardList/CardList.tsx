import { quizes } from '../../mock';
import { QuizCard } from '../QuizCard';

export const CardList = () => {
   const quizList = quizes;
   return (
      <>
         {quizList.map((quiz) => {
            return <QuizCard {...quiz} />;
         })}
      </>
   );
};
