import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { CardList } from '../../components/CardList';
import { MainBanner } from '../../components/MainBanner';
import { QuizInfoModal } from '../../components/QuizInfoModal';
import { FilterPanel } from '../../features/cardsFilter/CardsFilterPanel';
import { Modal } from '../../features/modalWindow/Modal/Modal';
import { addQuizes } from '../../features/quizes/quizes-slice';
import { quizes } from '../../mock';
import styles from './MainPage.module.scss';

export const MainPage = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(addQuizes(quizes));
   }, [dispatch]);
   return (
      <div className={styles.mainPage}>
         <MainBanner />
         <FilterPanel />
         <CardList />
         <Modal>
            <QuizInfoModal />
         </Modal>
      </div>
   );
};
