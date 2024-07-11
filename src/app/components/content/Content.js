'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './Content.module.css';

// section imports
import AboutSection from './AboutSection/AboutSection';
import StartSection from './TitleSection/StartSection';
import WorkSection from './WorkSection/WorkSection';

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
import CubeSvg from './TitleSection/svgContents/CubeSvg';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function Content() {
  //stores
  const setIsMobile = isMobileStore().setIsMobile;
  const isMobile = isMobileStore().isMobile;

  // refs
  const secondContainer = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, setIsMobile]);

  useGSAP(() => {
    gsap.to(window, { duration: 0, scrollTo: 0 });
  });

  return (
    <section className={styles.Main}>
      <AnotherSquareSvg />
      <SquareSvg />
      <CubeSvg />
      <StartSection
        styles={styles}
        isMobile={isMobile}
        secondContainer={secondContainer}
      />
      <AboutSection isMobile={isMobile} />
      <WorkSection isMobile={isMobile} />
    </section>
  );
}
