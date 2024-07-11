import React, { useRef } from 'react';
import styles from './AboutContent.module.css';
import Card from './Card/Card';
import MeImage from './Image/Image';

export default function AboutContent({ containerRef }) {
  const continueScrolling = useRef();
  return (
    <section className={styles.Content}>
      <div className={styles.FirstContentContainer}>
        <div className={styles.FirstContent}>
          <Card continueScrolling={continueScrolling} />
          <MeImage continueScrolling={continueScrolling} />
        </div>
        <div ref={continueScrolling} className={styles.ScrollTrigger}></div>
      </div>
    </section>
  );
}
