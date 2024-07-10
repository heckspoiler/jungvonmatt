'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function ({ styles, isMobile, containerRef }) {
  const arrowRef = useRef();

  useGSAP(
    () => {
      if (!arrowRef.current || !containerRef.current) {
        console.log('huso');
        return;
      }
      const tl = gsap.timeline();

      tl.from(arrowRef.current, {
        scale: 0,
        rotationZ: 280,
        delay: 0.65,
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={styles.Content}>
      <h1 className={styles.Arrow} ref={arrowRef}>
        →
      </h1>
    </div>
  );
}
