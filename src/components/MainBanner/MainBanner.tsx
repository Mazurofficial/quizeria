import styles from './MainBanner.module.scss';
import { Button } from '../../ui/Button';

export const MainBanner = () => {
   return (
      <>
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
               <Button isLink={true} link="#">
                  Discover more
               </Button>
               <Button isLink={true} link="#">
                  Random quiz
               </Button>
            </div>
         </div>
      </>
   );
};
