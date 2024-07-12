'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import SplitText from 'gsap/SplitText';
import styles from './WorkSection.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function WorkSection({ isMobile }) {
  const containerRef = useRef();

  useGSAP(() => {}, { scope: containerRef });

  return <div className={styles.Main} ref={containerRef}></div>;
}
