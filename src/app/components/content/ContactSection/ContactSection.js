'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import HoleSVG from './ContactSectionContent/svg/HoleSVG';
import { ScrollTrigger, Draggable } from 'gsap/all';

import styles from './ContactSection.module.css';

gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP);

export default function ContactSection({ isMobile }) {
  const emailRef = useRef();
  const containerRef = useRef();
  const instructionsRef = useRef();
  const svgContainerRef = useRef();
  const [state, setState] = useState({
    isHovered: false,
    isClicked: false,
    isDragging: false,
    isEntered: false,
    isDropped: false,
  });
  const formFieldsRef = useRef();

  useGSAP(
    () => {
      if (
        !emailRef.current ||
        !containerRef.current ||
        !svgContainerRef.current ||
        !formFieldsRef.current
      )
        return;

      const draggable = Draggable.create(emailRef.current, {
        type: 'x,y',
        bounds: containerRef.current,
        inertia: true,
        allowEventDefault: true,
        ignore: '.LowerContent, .LowerContent *',
        onDragStart: () => updateState({ isDragging: true }),
        onDragEnd: () => {
          setTimeout(() => updateState({ isDragging: false }), 0);
          checkIntersection();
          if ({ isEntered: true } && { isClicked: false }) {
            updateState({ isDropped: true });
          } else {
            updateState({ isDropped: false });
          }
        },
        onPress: () => updateState({ isClicked: true }),
        onRelease: function () {
          if (!this.isDragging) {
            updateState({ isClicked: false });
          }
        },
        onDrag: checkIntersection,
      })[0];

      function checkIntersection() {
        const emailBounds = emailRef.current.getBoundingClientRect();
        const holeBounds = svgContainerRef.current.getBoundingClientRect();

        const isIntersecting = !(
          emailBounds.right < holeBounds.left ||
          emailBounds.left > holeBounds.right ||
          emailBounds.bottom < holeBounds.top ||
          emailBounds.top > holeBounds.bottom
        );

        updateState({ isEntered: isIntersecting });
      }

      return () => {
        if (draggable) draggable.kill();
      };
    },

    { scope: containerRef }
  );

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  useEffect(() => {
    let message = '';
    if (state.isEntered && state.isDragging) message = 'Drop me now!';
    else if (state.isDragging) message = 'Drop me above the hole!';
    else if (state.isClicked) message = 'Now drag me!';
    else if (state.isHovered) message = 'Fill in the form and drag me!';
    else if (state.isDropped) message = 'Wooooooooo!';

    const tl = gsap.timeline();
    if (state.isDropped && state.isEntered && !state.isClicked) {
      const tl = gsap.timeline();
      tl.to(emailRef.current, {
        y: 200,
        scale: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    if (instructionsRef.current) instructionsRef.current.innerHTML = message;
  }, [state]);

  return (
    <section className={styles.Main} ref={containerRef}>
      <h1>I hope I caught your interests. </h1>
      <h3> If so, drop me a line below.</h3>

      <div className={styles.ContentContainer}>
        <div
          className={styles.EmailContainer}
          ref={emailRef}
          onMouseEnter={() => updateState({ isHovered: true })}
          onMouseLeave={() =>
            updateState({ isHovered: false, isClicked: false })
          }
        >
          <div className={styles.Email}>
            <div className={styles.Instructions}>
              <h3 ref={instructionsRef}></h3>
            </div>
            <div className={styles.UpperContent}>
              <h3>Throw me into the hole!</h3>
              <p>
                I'm really looking forward to hearing from you! If I'm not a fit
                for the position available, I'd also be thrilled to do an
                internship or traineeship.
              </p>
            </div>
            <div className={styles.LowerContent} ref={formFieldsRef}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="yeswehireyou@youcoolguy.com" />
              <textarea placeholder="Write what you want" />
            </div>
          </div>
        </div>
        <div className={styles.SVGContainer} ref={svgContainerRef}>
          <div>
            <HoleSVG />
          </div>
        </div>
      </div>
    </section>
  );
}
