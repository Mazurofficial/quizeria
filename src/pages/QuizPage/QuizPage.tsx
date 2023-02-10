import { QuestionContainer } from '../../components/Question';
import styles from './QuizPage.module.scss';
import { StarWarsQuiz } from '../../mock';

export const QuizPage = () => {
   const { questions } = StarWarsQuiz;
   const { title, variants } = questions[0];

   return (
      <div className={styles.quizPage}>
         <QuestionContainer title={title} variants={variants} />
      </div>
   );
};
