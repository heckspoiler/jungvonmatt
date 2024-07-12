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
  const e = useRef();
  const f = useRef();
  const g = useRef();
  const h = useRef();

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !a.current ||
        !b.current ||
        !c.current ||
        !d.current ||
        !e.current ||
        !f.current ||
        !g.current ||
        !h.current
      ) {
        return;
      }

      const elements = [
        a.current,
        b.current,
        c.current,
        d.current,
        e.current,
        f.current,
        g.current,
        h.current,
      ];

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
        x: (index) => `${index} * 100`,
        opacity: '0',
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
              opacity: '1',
              x: (index) => `${index} * 100`,
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
          <h1>Next.js</h1>
        </div>
        <div className={styles.Test} ref={e}>
          <h1>React</h1>
        </div>
        <div className={styles.Test} ref={b}>
          <h1>Tailwind CSS</h1>
        </div>
        <div className={styles.Test} ref={c}>
          <h1>GSAP</h1>
        </div>
        <div className={styles.Test} ref={d}>
          <h1>THREE.js / React Three Fiber</h1>
        </div>
        <div className={styles.Test} ref={f}>
          <h1>HTML</h1>
        </div>
        <div className={styles.Test} ref={g}>
          <h1>CSS</h1>
        </div>
        <div className={styles.Test} ref={h}>
          <h1>Javascript</h1>
        </div>
      </div>
    </section>
  );
}
