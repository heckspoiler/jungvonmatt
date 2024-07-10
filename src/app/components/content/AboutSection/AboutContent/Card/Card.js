import React from 'react';
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.Card}>
        <div className={styles.InfoContainer}>
          <h3>Name:</h3>
          <p>Carlo Ettisberger</p>
        </div>
      </div>
    </div>
  );
}
