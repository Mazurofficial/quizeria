import styles from './MainBanner.module.scss';
import { Button } from '../../ui/Button';
import { quizes } from '../../mock';
import { HashLink } from 'react-router-hash-link';

export const MainBanner = () => {
   const selectRandomQuiz = () => Math.floor(Math.random() * quizes.length + 1);

   return (
      <div className={styles.container}>
         <div className={styles.mainBanner_circle1}></div>
         <div className={styles.mainBanner_circle2}></div>
         <div className={styles.mainBanner}>
            <h1>Quizeria</h1>
            <div className={styles.mainBanner_line}></div>
            <p>
               Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
               vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className={styles.mainBanner_buttons}>
               <HashLink
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                  to="localhost:3000#quizes"
               >
                  <Button isLink={false}>Discover more</Button>
               </HashLink>
               <Button isLink={true} link={`quiz/${selectRandomQuiz()}`}>
                  Random quiz
               </Button>
            </div>
         </div>
      </div>
   );
};
