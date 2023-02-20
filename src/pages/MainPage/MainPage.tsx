import { CardList } from '../../components/CardList';
import { MainBanner } from '../../components/MainBanner';
import styles from './MainPage.module.scss';

interface MainPageProps {}

export const MainPage = ({}: MainPageProps) => {
   return (
      <div className={styles.mainPage}>
         <MainBanner />
         <CardList />
      </div>
   );
};
