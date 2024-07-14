'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import HoleSVG from './ContactSectionContent/svg/HoleSVG';
import { Physics2DPlugin, ScrollTrigger, Draggable } from 'gsap/all';

import styles from './ContactSection.module.css';

gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP);

export default function ContactSection() {
  const emailRef = useRef();
  const containerRef = useRef();

  useGSAP(
    () => {
      if (!emailRef.current || !containerRef.current) {
        return;
      }
      Draggable.create(emailRef.current, {
        type: 'x,y',
        bounds: containerRef.current,
        inertia: true,
        dragClickables: false,

        onDragStart: function () {
          this.isDragging = true;
        },
        onDragEnd: function () {
          setTimeout(() => {
            this.isDragging = false;
          }, 0);
        },
        onPress: function () {
          this.isDragging = false;
        },
      });
    },
    { scope: containerRef.current }
  );

  return (
    <section className={styles.Main} ref={containerRef}>
      <h1>I hope I caught your interests. If so, drop me a line below. </h1>

      <div className={styles.ContentContainer}>
        <div className={styles.EmailContainer} ref={emailRef}>
          <div className={styles.Email}>
            <div className={styles.UpperContent}>
              <h3>Throw me into the hole!</h3>
              <p>
                I'm really looking forward to hearing from you! If I'm not a fit
                for the position available, I'd also be thrilled to do an
                internship or traineeship.
              </p>
            </div>
            <div className={styles.LowerContent}>
              <input type="text" placeholder="Your Name"></input>
              <input
                type="email"
                placeholder="yeswehireyou@youcoolguy.com"
              ></input>
              <textarea placeholder="Write what you want"></textarea>
            </div>
          </div>
        </div>
        <div className={styles.SVGContainer}>
          <div>
            <HoleSVG />
          </div>
        </div>
      </div>
    </section>
  );
}
