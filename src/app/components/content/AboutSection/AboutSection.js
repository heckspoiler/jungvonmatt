import React, { useRef } from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const containerRef = useRef();
  return (
    <section className={styles.Main} ref={containerRef}>
      <div>
        <h1>Helloo</h1>
      </div>
    </section>
  );
}
