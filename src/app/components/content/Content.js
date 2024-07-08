'use client';

import React, { useRef, useEffect } from 'react';
import styles from './Content.module.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Content() {
  const containerRef = useRef();
  const textRef = useRef();
  return (
    <section className={styles.Main}>
      <div className={styles.TitleContainer}>
        <div className={styles.Content}>
          <h1 className={styles.MainTitle}>Missed Opportunity</h1>
        </div>
        <div className={styles.Content}>
          <h1 className={styles.Arrow}>→</h1>
        </div>
        <div className={styles.Content}>
          <h1 className={styles.MainTitle}>New Chance</h1>
        </div>
      </div>
      <div className={styles.LowerContainer}>
        <div className={styles.LowerContent}>
          <h2>
            The last time didn't quite work out, but let's have another shot. My
            Name is Carlo Ettisberger and I'm a Web Developer based in Zurich.
          </h2>
        </div>
      </div>
    </section>
  );
}
