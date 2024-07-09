import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function LowerContainer({ styles, secondContainer }) {
  const textRef = useRef();

  useGSAP(() => {
    if (!textRef.current) {
      return;
    }
    const split = new SplitText(textRef.current, {
      type: 'chars',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: secondContainer.current,
        // markers: true,
        pin: true,
        scrub: 0.3,
        start: 'top 40.3%',
        end: 'bottom 8%',
      },
    });

    tl.from(split.chars, {
      visibility: 'hidden',
      y: 100,
      duration: 0.6,
      ease: 'circ.out',
      stagger: 0.02,
      delay: 1.5,
      onComplete: () => {
        !tl2.paused;
        console.log(tl2.paused);
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: secondContainer.current,
        // markers: true,
        pin: true,
        scrub: 0.3,
        start: 'top 40.1%',
        end: 'bottom 0%',
      },
      paused: true,
    });

    tl2.to(split.chars, {
      y: -100,
      duration: 0.8,
      stagger: 0.04,
    });
  });

  return (
    <div className={styles.LowerContainer}>
      <div className={styles.LowerContent} ref={secondContainer}>
        <h1 ref={textRef}>I think we should work together!</h1>
      </div>
    </div>
  );
}
