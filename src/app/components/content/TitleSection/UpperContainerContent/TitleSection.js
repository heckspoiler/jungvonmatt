'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function TitleSection({ styles, containerRef, isMobile }) {
  const textRef = useRef();
  const arrowRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    console.log('is Mobile: ', isMobile);
  });

  useGSAP(
    () => {
      const split = new SplitText(textRef.current, { type: 'chars' });
      const tl = gsap.timeline();

      if (!textRef.current || !arrowRef.current || !containerRef.current)
        return;

      tl.from(split.chars, {
        y: 150,
        stagger: 0.05,
        duration: 0.6,
        ease: 'circ.out',
      }).from(
        arrowRef.current,
        {
          scale: 0,
          duration: 0.4,
          ease: 'back.out(1.7)',
        },
        '-=0.3'
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 14.3%',
          end: 'bottom top',
          pin: true,
          toggleActions: 'play none none reverse',
          scrub: 0.3,
          //   markers: true,
          pinSpacing: false,
        },
      });

      const scrollTl2 = gsap.timeline({
        scrollTrigger: {
          trigger: arrowRef.current,
          start: 'top 14.3%',
          end: 'bottom 8%',
          pin: true,
          toggleActions: 'play none none reverse',
          scrub: 0.3,
          //   markers: true,
          pinSpacing: false,
        },
      });

      scrollTl.to(split.chars, {
        y: -100,
        stagger: 0.03,
        duration: 0.2,
        ease: 'circ.in',
        transformOrigin: '50% 50% -50',
      });
      scrollTl2.to(arrowRef.current, {
        rotationZ: -90,
        duration: 0.2,
        ease: 'circ.in',
      });
    },

    { scope: containerRef }
  );

  return (
    <>
      <div className={styles.Content} ref={boxRef}>
        <h1 className={styles.MainTitle} ref={textRef}>
          Missed Chance
        </h1>
      </div>
      <div className={styles.Content}>
        <h1 className={styles.Arrow} ref={arrowRef}>
          →
        </h1>
      </div>
    </>
  );
}
