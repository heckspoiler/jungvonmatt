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
import SquareSvg from './TitleSection/svgContents/SquareSvg';
import AnotherSquareSvg from './TitleSection/svgContents/AnotherSquareSvg';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function Content() {
  //stores
  const setIsMobile = isMobileStore().setIsMobile;
  const isMobile = isMobileStore().isMobile;

  // refs
  const containerRef = useRef();
  const secondContainer = useRef();

  useEffect(() => {
    const handleLoad = () => {
      console.log('utzjgkzgjkzjggjkh');
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

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
      <AnotherSquareSvg />
      <SquareSvg />
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
