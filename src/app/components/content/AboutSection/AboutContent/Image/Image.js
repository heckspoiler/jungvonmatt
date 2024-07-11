'use client';

import React, { useRef, useState, forwardRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Image.module.css';
import Image from 'next/image';

const MeImage = forwardRef(({ isMobile }, ref) => {
  const containerRef = useRef();
  const imageRef = useRef();

  const [isHovered, setIsHovered] = useState(false);

  const mouseEnter = () => {
    setIsHovered(true);
    console.log('Mouse entered');
  };

  const mouseLeave = () => {
    setIsHovered(false);
    console.log('Mouse left');
  };

  useGSAP(
    () => {
      if (!containerRef.current || !imageRef.current) {
        return;
      }

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom top',
        markers: true,
        toggleActions: 'play none none reverse',
        animation: gsap.timeline().from(imageRef.current, {
          scale: 0,
          delay: 2.5,
          duration: 2,
          ease: 'elastic.out',
        }),
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={styles.Container}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className={styles.ImageContainer}>
        <Image
          ref={imageRef}
          src="/assets/img/carlo.png" // Update this path to your image
          alt="Description of image"
          width={400}
          height={500}
        />
      </div>
    </div>
  );
});

export default MeImage;
