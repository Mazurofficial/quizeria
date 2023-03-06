import { useAppSelector } from '../../app/hooks';
import {
   selectCheckedUserAnswers,
   selectRightUserAnswersAmount,
} from '../../features/activeQuiz/activeQuiz-slice';
import { AnswerType } from '../../types';
import styles from './ResultsContainer.module.scss';
import Face5Star from './emotions_img/Face5Star.png';
import Face4Star from './emotions_img/Face4Star.png';
import Face3Star from './emotions_img/Face3Star.png';
import Face2Star from './emotions_img/Face2Star.png';
import Face1Star from './emotions_img/Face1Star.png';
import { Stars } from './Stars/Stars';
import { Button } from '../../ui/Button';


export const ResultsContainer = () => {
   const checkedAnswers: AnswerType[] = useAppSelector(
      selectCheckedUserAnswers
   );
   const userRightAnswersAmount = useAppSelector(selectRightUserAnswersAmount);

   let stars = 0;
   const calcStarsChooseFace = () => {
      const resultPercantage =
         (userRightAnswersAmount / checkedAnswers.length) * 100;
      if (resultPercantage <= 20) {
         stars = 1;
         return Face1Star;
      } else if (resultPercantage > 20 && resultPercantage <= 40) {
         stars = 2;
         return Face2Star;
      } else if (resultPercantage > 40 && resultPercantage <= 60) {
         stars = 3;
         return Face3Star;
      } else if (resultPercantage > 60 && resultPercantage <= 80) {
         stars = 4;
         return Face4Star;
      } else if (resultPercantage > 80) {
         stars = 5;
         return Face5Star;
      } else {
         return '';
      }
   };

   return (
      <div className={styles.resultsContainer}>
         <div className={styles.resultBanner_circle1}></div>
         <div className={styles.resultBanner_circle2}></div>
         <div className={styles.resultBanner}>
         <img src={calcStarsChooseFace()} alt="Face" />
         <Stars stars={stars} />
         {/* <h2>Right user answers</h2>
         {checkedAnswers.map((answer, index) => {
            if (answer[1]) {
               return (
                  <p key={index}>
                     <span
                        style={{
                           fontWeight: 'bold',
                           marginRight: '10px',
                        }}
                     >
                        {`${index + 1})`}
                     </span>
                     <span
                        style={{
                           marginRight: '5px',
                        }}
                     >
                        {answer[0]}
                     </span>
                     {answer[1]}
                  </p>
               );
            } else {
               return (
                  <p key={index}>
                     <span
                        style={{
                           fontWeight: 'bold',
                           marginRight: '10px',
                        }}
                     >
                        {`${index + 1})`}
                     </span>
                     No answer
                  </p>
               );
            }
         })} */}
         <h1>Right answers amount {userRightAnswersAmount}/{checkedAnswers.length}</h1>
         <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <Button isLink={true} link={'#'}>
            New quiz
         </Button>
      </div>
      </div>
   );
};
