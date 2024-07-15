'use client';
import React, { useRef, useEffect, useState } from 'react';
import styles from './Content.module.css';

// section imports
import AboutSection from './AboutSection/AboutSection';
import StartSection from './TitleSection/StartSection';
import SkillSection from './SkillSection/SkillSection';
import WorkSection from './WorkSection/WorkSection';
import ContactSection from './ContactSection/ContactSection';
//gsap imports
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollSmoother from 'gsap/ScrollSmoother';

// varia imports
import { isMobileStore } from '../../../../stores/isMobileStore';
import SquareSvg from './TitleSection/svgContents/SquareSvg';
import AnotherSquareSvg from './TitleSection/svgContents/AnotherSquareSvg';
import CubeSvg from './TitleSection/svgContents/CubeSvg';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

gsap.registerPlugin(useGSAP, ScrollSmoother);

export default function Content() {
  //stores
  const setIsMobile = isMobileStore().setIsMobile;
  const isMobile = isMobileStore().isMobile;

  // refs
  const secondContainer = useRef();
  const containerRef = useRef();

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

  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis className={styles.Main} ref={containerRef}>
      {/* <AnotherSquareSvg />
      <SquareSvg />
      <CubeSvg />
      <StartSection
        styles={styles}
        isMobile={isMobile}
        secondContainer={secondContainer}
      />
      <AboutSection isMobile={isMobile} />
      <SkillSection isMobile={isMobile} />
      <WorkSection isMobile={isMobile} /> */}
      <ContactSection isMobile={isMobile} />
    </ReactLenis>
  );
}
