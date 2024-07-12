'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import styles from './WorkSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function WorkSection({ isMobile }) {
  const containerRef = useRef();
  const portalRef = useRef();

  useGSAP(
    () => {
      if (!containerRef.current || !portalRef.current) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          markers: true,
          pin: containerRef.current,
          pinSpacing: false,
          scrub: 0.1,
        },
      });

      tl.from(portalRef.current, {
        scale: 0,
      }).to(portalRef.current, {
        pin: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={styles.Main} ref={containerRef}>
      <div className={styles.Portal} ref={portalRef}></div>
    </div>
  );
}
