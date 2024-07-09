import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function LowerContainer({ styles, secondContainer }) {
  return (
    <div className={styles.LowerContainer} ref={secondContainer}>
      <div className={styles.LowerContent}>
        <h2>I think we should work together!</h2>
      </div>
    </div>
  );
}
