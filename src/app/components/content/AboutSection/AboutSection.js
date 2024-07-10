import React, { useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AboutContent from './AboutContent/AboutContent';

import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) {
        return;
      }

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <section className={styles.Main} ref={containerRef}>
      <AboutContent containerRef={containerRef} />
    </section>
  );
}
