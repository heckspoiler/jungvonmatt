import React, { useRef } from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const containerRef = useRef();
  return (
    <section className={styles.Main} ref={containerRef}>
      <h1>AboutSection</h1>
    </section>
  );
}
