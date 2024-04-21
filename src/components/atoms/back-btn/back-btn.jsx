'use client';

import styles from './back-btn.module.css';

export const BackButton = () => {
  return (
    <button className={styles.btn} onClick={() => history.back()}>
      Go Back
    </button>
  );
};
