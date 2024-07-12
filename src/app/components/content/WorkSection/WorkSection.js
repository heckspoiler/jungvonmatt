'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './WorkSection.module.css';
import { Draggable } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger, Physics2DPlugin, Draggable);

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

      elements.forEach((element) => {
        Draggable.create(element, {
          type: 'x,y',
          bounds: containerRef.current,
          inertia: true,
          isThrowing: true,
        });
      });

      gsap.set(elements, {
        visibility: 'hidden',
        y: '-100',
        rotation: () => gsap.utils.random(-120, 120),
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 10%',
        end: 'bottom 0%',
        markers: true,
        pin: true,
        pinSpacing: false,
        onEnter: () => {
          elements.forEach((el, index) => {
            gsap.to(el, {
              duration: 2,
              visibility: 'visible',
              y: () => containerRef.current.offsetHeight - el.offsetHeight,
              rotation: 0,
              ease: 'bounce.out',
              delay: index * 0.1,
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
            src="/assets/img/technologies/next_.png"
            width={250}
            height={50}
            layout="intrinsic"
            alt="Next.js Logo"
          />
        </div>
        <div className={styles.Test} ref={b}>
          <svg
            width="200px"
            height="200px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
          </svg>
        </div>
        <div className={styles.Test} ref={c}></div>
        <div className={styles.Test} ref={d}></div>
      </div>
    </section>
  );
}
