'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import HoleSVG from './ContactSectionContent/svg/HoleSVG';
import { Physics2DPlugin, ScrollTrigger, Draggable } from 'gsap/all';

import styles from './ContactSection.module.css';

gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP);

export default function ContactSection({ isMobile }) {
  const emailRef = useRef();
  const containerRef = useRef();
  const instructionsRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const svgContainerRef = useRef();
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    const options = {
      root: emailRef.current,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Email entered the hole!');
          setIsEntered(true);
          svgContainerRef.current.style.backgroundColor = 'lightblue';
        } else {
          console.log('Email left the hole!');
          setIsEntered(false);
          svgContainerRef.current.style.backgroundColor = 'transparent';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (emailRef.current && svgContainerRef.current) {
      observer.observe(svgContainerRef.current);
    }

    return () => {
      if (emailRef.current) {
        observer.unobserve(svgContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isDragging) {
      instructionsRef.current.innerHTML = 'Drop me above the hole!';
    } else if (isClicked) {
      instructionsRef.current.innerHTML = 'Now drag me!';
    } else if (isHovered) {
      instructionsRef.current.innerHTML = 'Fill in the form and drag me!';
    } else {
      instructionsRef.current.innerHTML = '';
    }
  }, [isHovered, isClicked, isDragging, isEntered]);

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
          setIsDragging(true);
        },
        onDragEnd: function () {
          setTimeout(() => {
            setIsDragging(false);
          }, 0);
        },
        onPress: function () {
          setIsClicked(true);
        },
        onRelease: function () {
          if (!this.isDragging) {
            setIsClicked(false);
          }
        },
      });
    },
    { scope: containerRef.current }
  );

  return (
    <section className={styles.Main} ref={containerRef}>
      <h1>I hope I caught your interests. </h1>
      <h3> If so, drop me a line below.</h3>

      <div className={styles.ContentContainer}>
        <div
          className={styles.EmailContainer}
          ref={emailRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsClicked(false);
            setIsDragging(false);
          }}
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
        <div className={styles.SVGContainer} ref={svgContainerRef}>
          <div>
            <HoleSVG />
          </div>
        </div>
      </div>
    </section>
  );
}
