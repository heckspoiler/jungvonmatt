'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './Content.module.css';

// section imports
import AboutSection from './AboutSection/AboutSection';
import StartSection from './TitleSection/StartSection';

//gsap imports
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// varia imports
import { isMobileStore } from '../../../../stores/isMobileStore';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function Content() {
  //stores
  const setIsMobile = isMobileStore().setIsMobile;
  const isMobile = isMobileStore().isMobile;

  // refs
  const containerRef = useRef();
  const secondContainer = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <section className={styles.Main}>
      <StartSection
        styles={styles}
        containerRef={containerRef}
        isMobile={isMobile}
        secondContainer={secondContainer}
      />
      <AboutSection isMobile={isMobile} />
    </section>
  );
}
