'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function RightTitleSection({ styles, containerRef }) {
  const textRef = useRef();
  const boxRef = useRef();

  useGSAP(
    () => {
      if (!textRef.current || !boxRef.current || !containerRef) {
        return;
      }

      const split = new SplitText(textRef.current, {
        type: 'chars',
      });

      const tl = gsap.timeline({ paused: false });

      tl.from(boxRef.current, {
        y: 100,
        delay: 0.8,
      }).from(split.chars, {
        y: 100,
        stagger: 0.05,
        delay: 0.1,
      });
    },

    { scope: containerRef }
  );

  return (
    <div className={styles.RightContainer}>
      <div className={styles.BlackBGContainer} ref={boxRef}>
        <h1 className={styles.BlackBG} ref={textRef}>
          New Opportunity
        </h1>
      </div>
    </div>
  );
}
