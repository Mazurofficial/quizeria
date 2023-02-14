import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectWatchStatus, setResultTime } from './stopWatch-slice';
import styles from './StopWatch.module.scss';

interface StopWatch {}

export const StopWatch = ({}: StopWatch) => {
   const isActive = useAppSelector(selectWatchStatus);
   const [time, setTime] = useState(0);

   const dispatch = useAppDispatch();

   useEffect(() => {
      let interval: any = null;

      if (isActive === false) {
         interval = setInterval(() => {
            setTime((time) => time + 1);
         }, 1);
      } else {
         clearInterval(interval);
      }
      return () => {
         clearInterval(interval);
         dispatch(setResultTime(time));
      };
   }, [isActive]);

   return <div className={styles.watch}>{time}</div>;
};
