import React from 'react';
import styles from './AboutContent.module.css';
import Card from './Card/Card';

export default function AboutContent({ containerRef }) {
  return (
    <section className={styles.Content}>
      <div className={styles.FirstContent}>
        <Card />
      </div>
    </section>
  );
}
