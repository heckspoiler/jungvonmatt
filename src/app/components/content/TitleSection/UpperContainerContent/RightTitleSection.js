'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function RightTitleSection({ styles }) {
  const textRef = useRef();
  const boxRef = useRef();
  const containerRef = useRef();

  useGSAP(
    () => {
      if (!textRef.current || !boxRef.current || !containerRef) {
        console.log('Refs not ready');
        return;
      }

      const split = new SplitText(textRef.current, {
        type: 'chars',
      });

      const tl = gsap.timeline({ paused: false });

      tl.from(boxRef.current, {
        lazy: false,
        y: 100,
        duration: 0.6,
        ease: 'circ.out',
        delay: 0.8,
      }).from(split.chars, {
        lazy: false,
        y: 100,
        duration: 0.6,
        stagger: 0.02,
        ease: 'circ.out',
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 42%',
          end: 'bottom top',
          pin: true,
          toggleActions: 'play none none reverse',
          scrub: 0.3,
          markers: true,
          pinSpacing: false,
        },
      });

      scrollTl.to(boxRef.current, {
        y: -600,
        stagger: 0.03,
        duration: 0.1,
        ease: 'circ.in',
      });
    },

    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className={styles.Content}>
        <div className={styles.BlackBGContainer} ref={boxRef}>
          <h1 className={styles.BlackBG} ref={textRef}>
            New Opportunity
          </h1>
        </div>
      </div>
    </section>
  );
}
