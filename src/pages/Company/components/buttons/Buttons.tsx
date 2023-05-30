import { useState } from 'react';
import styles from './Buttons.module.css';

type ButtonsProps = {
  onPrevPage: () => void;
  onNextPage: () => void;
  page: number;
  totalPages: number;
};
const Buttons = ({
  onNextPage,
  onPrevPage,
  page,
  totalPages,
}: ButtonsProps) => {
  return (
    <div className={styles.btnsActions}>
      <button className={styles.prev} onClick={onPrevPage} disabled={page <= 0}>
        prev{' '}
      </button>
      <button
        className={styles.next}
        onClick={onNextPage}
        disabled={page === totalPages}
      >
        next{' '}
      </button>
    </div>
  );
};

export default Buttons;
