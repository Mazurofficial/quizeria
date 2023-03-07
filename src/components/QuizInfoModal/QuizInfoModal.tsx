import { getQuizById } from '../../api';
import { useAppSelector } from '../../app/hooks';
import { selectActiveQuizId } from '../../features/activeQuiz/activeQuiz-slice';
import { quizes } from '../../mock';
import { Button } from '../../ui/Button';
import styles from './QuizInfoModal.module.scss';

export const QuizInfoModal = () => {
   const quizId = useAppSelector(selectActiveQuizId);
   const { img, category, title, difficulty, type, description, questions } =
      getQuizById(quizes, quizId);

   return (
      <div className={styles.quizInfoModal}>
         <div className={styles.quizInfoModal_Heading}>
            <img src={img} alt={title} />
            <div className={styles.quizInfoModal_Heading_Section}>
               <h3>{title}</h3>
               <Button isLink={true} link={`quiz/${quizId}`}>
                  Start
               </Button>
            </div>
         </div>
         <div className={styles.quizInfoModal_Info}>
            <div className={styles.quizInfoModal_Info_Description}>
               <h4>Description</h4>
               <p>{description}</p>
            </div>
            <div className={styles.quizInfoModal_Info_Badges}>
               <table>
                  <tbody>
                     <tr>
                        <td>
                           {' '}
                           <h4>Difficulty:</h4>
                        </td>
                        <td>
                           <p>{difficulty}</p>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           {' '}
                           <h4>Category:</h4>
                        </td>
                        <td>
                           <p>{category}</p>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           {' '}
                           <h4>Questions:</h4>
                        </td>
                        <td>
                           <p>{questions.length}</p>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           {' '}
                           <h4>Type:</h4>
                        </td>
                        <td>
                           <p>{type}</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};
