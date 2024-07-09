'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './Content.module.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleSection from './TitleSection/TitleSection';
import RightTitleSection from './TitleSection/RightTitleSection';
import LowerContainer from './TitleSection/LowerContainer';
import { isMobileStore } from '../../../../stores/isMobileStore';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function Content() {
  const setIsMobile = isMobileStore().setIsMobile;
  const isMobile = isMobileStore().isMobile;
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
      <div className={styles.TitleContainer} ref={containerRef}>
        <TitleSection
          styles={styles}
          containerRef={containerRef}
          isMobile={isMobile}
        />
        <RightTitleSection
          styles={styles}
          containerRef={containerRef}
          isMobile={isMobile}
        />
      </div>
      <LowerContainer
        styles={styles}
        secondContainer={secondContainer}
        isMobile={isMobile}
      />
    </section>
  );
}
