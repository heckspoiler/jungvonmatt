'use client';
import React, { useRef, useEffect, useState } from 'react';
import styles from './Content.module.css';

// section imports

import StartSection from './TitleSection/StartSection';

// varia imports
import { isMobileStore } from '../../../../stores/isMobileStore';
import SquareSvg from './TitleSection/svgContents/SquareSvg';
import AnotherSquareSvg from './TitleSection/svgContents/AnotherSquareSvg';
import CubeSvg from './TitleSection/svgContents/CubeSvg';
import { ReactLenis } from '@studio-freight/react-lenis';
import intersectionStore from '../../../../stores/intersection';
import { useStore } from 'zustand';

export default function Content() {
  //stores
  const setIsMobile = isMobileStore().setIsMobile;
  const isMobile = isMobileStore().isMobile;

  const { currentSection, setCurrentSection } = useStore(intersectionStore);

  // refs
  const secondContainer = useRef();
  const containerRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, setIsMobile]);

  return (
    <ReactLenis className={styles.Main}>
      {isMobile ? (
        <section className={styles.Mobile}>
          <h1>Only on wider screens available!</h1>
        </section>
      ) : (
        <section ref={containerRef} id="container">
          <div ref={homeRef} id="home">
            <AnotherSquareSvg />
            <SquareSvg />
            <CubeSvg />
          </div>
        </section>
      )}
    </ReactLenis>
  );
}
