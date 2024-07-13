'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import SplitText from 'gsap/SplitText';
import styles from './WorkSection.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

export default function WorkSection({ isMobile }) {
  const containerRef = useRef();
  const testRefs = useRef([]);
  const containerWrapper = useRef();
  const titleRef = useRef();

  useGSAP(() => {
    if (
      !containerRef.current ||
      !containerWrapper.current ||
      !titleRef.current
    ) {
      return;
    }

    function amountToScroll() {
      let containerWidth = containerWrapper.current.scrollWidth;
      console.log(containerWidth);
      return -(containerWidth - window.innerWidth);
    }

    const split = new SplitText(titleRef.current, { type: 'chars' });

    const titleTrigger = gsap.from(split.chars, {
      y: 100,
      stagger: 0.02,
      ease: 'power2.out',
    });

    const tween = gsap.to(containerRef.current, {
      x: amountToScroll,
      duration: 3,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: containerWrapper.current,
      markers: true,
      start: 'top 30%',
      end: 'bottom top',
      animation: titleTrigger,
    });

    ScrollTrigger.create({
      trigger: containerWrapper.current,
      start: 'top top',
      end: () => `+=${amountToScroll() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      // markers: true,
    });
  }, []);

  return (
    <div className={styles.Main} ref={containerWrapper}>
      <div className={styles.TitleContainer}>
        <h1 ref={titleRef}>Projects</h1>
      </div>
      <div className={styles.Portal} ref={containerRef}>
        <div className={styles.Container}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={styles.TestCurb}
              ref={(el) => (testRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
