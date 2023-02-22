import { CardList } from '../../components/CardList';
import { MainBanner } from '../../components/MainBanner';
import styles from './MainPage.module.scss';

export const MainPage = () => {
   return (
      <div className={styles.mainPage}>
         <MainBanner />
         <CardList />
      </div>
   );
};
