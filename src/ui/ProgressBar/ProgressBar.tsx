import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
   completed: number;
}

export const ProgressBar = ({ completed }: ProgressBarProps) => {
   return (
      <div className={styles.container}>
         <div
            className={styles.progressBar}
            style={{ width: `${completed}%` }}
         ></div>
      </div>
   );
};
