'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './WorkSection.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger, Physics2DPlugin);

export default function WorkSection({ isMobile }) {
  const containerRef = useRef();
  const a = useRef();
  const b = useRef();
  const c = useRef();
  const d = useRef();

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !a.current ||
        !b.current ||
        !c.current ||
        !d.current
      ) {
        return;
      }

      const elements = [a.current, b.current, c.current, d.current];

      // Set initial state
      gsap.set(elements, {
        visibility: 'hidden',
        y: '-100',
        x: () => `random(0, ${containerRef.current.offsetWidth / 2})`,
        rotation: () => gsap.utils.random(-120, 120),
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 30%',
        end: 'bottom 0%',
        markers: true,
        onEnter: () => {
          elements.forEach((el, index) => {
            gsap
              .to(el, {
                duration: 2,
                visibility: 'visible',
                y: () => containerRef.current.offsetHeight - el.offsetHeight,
                x: () =>
                  gsap.utils.random(0, containerRef.current.offsetWidth / 2),
                rotation: 0,
                ease: 'bounce.out',
                delay: index * 0.1,
              })
              .gsap.to(containerRef.current, {
                pin: true,
                pinSpacing: false,
              });
          });
        },
        onLeave: () => {
          gsap.to(elements, {
            duration: 1,
            x: 0,
            y: 0,
            rotation: 0,
            visibility: 'hidden',
            ease: 'power3.out',
          });
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <section className={styles.Main}>
      <div className={styles.TestContainer} ref={containerRef}>
        <div className={styles.Test} ref={a}>
          <Image
            src="/assets/img/technologies/next.png"
            width={200}
            height={50}
            alt="Next.js Logo"
          />
        </div>
        <div className={styles.Test} ref={b}></div>
        <div className={styles.Test} ref={c}></div>
        <div className={styles.Test} ref={d}></div>
      </div>
    </section>
  );
}
