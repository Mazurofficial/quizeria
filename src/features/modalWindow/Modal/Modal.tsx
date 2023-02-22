import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectIsModalVisible } from '../modalWindow-slice';
import { closeModal } from '../modalWindow-slice';
import { useAppDispatch } from '../../../app/hooks';
import styles from './Modal.module.scss';
import { ReactComponent as DefaultCloseIcon } from './closeImg/default.svg';

interface ModalProps {
   children?: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
   const isVisible = useAppSelector(selectIsModalVisible);

   const dispatch = useAppDispatch();

   return isVisible ? (
      <div className={styles.modal} onClick={() => dispatch(closeModal())}>
         <div className={styles.modal_window}>
            <span onClick={() => dispatch(closeModal())}>
               <DefaultCloseIcon />
            </span>
            {children}
         </div>
      </div>
   ) : null;
};
