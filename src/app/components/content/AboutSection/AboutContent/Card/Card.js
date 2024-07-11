import React from 'react';
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.Card}>
        <div className={styles.TitleContainer}>
          <h1>Who am i?</h1>
        </div>
        <div className={styles.InfoContainer}>
          <div className={styles.InfoLine}>
            <div className={styles.InfoCell}>
              <p>Name:</p>
              <h2>Carlo Ettisberger</h2>
            </div>
            <div className={styles.InfoCell}>
              <p>Birthday:</p>
              <h2>20.12.1990</h2>
            </div>
          </div>
          <div className={styles.InfoLine}></div>
        </div>
      </div>
    </div>
  );
}
