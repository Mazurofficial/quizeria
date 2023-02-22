import { CardList } from '../../components/CardList';
import { MainBanner } from '../../components/MainBanner';
import { QuizInfoModal } from '../../components/QuizInfoModal';
import { Modal } from '../../features/modalWindow/Modal/Modal';
import styles from './MainPage.module.scss';

export const MainPage = () => {
   return (
      <div className={styles.mainPage}>
         <MainBanner />
         <CardList />
         <Modal>
            <QuizInfoModal />
         </Modal>
      </div>
   );
};
