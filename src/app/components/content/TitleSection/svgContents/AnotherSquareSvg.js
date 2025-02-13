import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnotherSquareSvg.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AnotherSquareSvg() {
  const containerRef = useRef();
  const svgRef = useRef();

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        scrub: 0.8,
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(svgRef.current, {
      scale: 8,
      y: -500,
      x: -1800,
      rotateX: 1800,
      duration: 3.8,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className={styles.Container} ref={containerRef}>
      <svg
        ref={svgRef}
        width="534"
        height="316"
        viewBox="0 0 534 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M305.304 267L432 161.17L224.854 118L111 223.389L305.304 267ZM226.964 125.639L354.49 152.217L291.122 205.102L168.337 179.908L226.964 125.639ZM292.973 212.641L363.201 154.042L416.348 165.12L303.424 259.441L125.522 219.509L161.966 185.773L292.973 212.641Z"
          fill="black"
        />
        <path
          d="M324.565 316L534 141.958L527.189 75.4087L190.862 0L0 180.839L7.00118 249.471L324.565 316ZM520.738 81.1648L526.359 136.062L203.764 68.5516L196.033 8.35872L520.738 81.1648ZM201.684 75.2686L522.478 142.419L322.694 308.452L17.643 244.525L201.684 75.2686ZM7.35121 183.562L189.382 11.1316L196.953 70.1032L13.0723 239.28L7.35121 183.562Z"
          fill="black"
        />
        <path
          d="M196 8L520.385 80.9752L526 136L203.724 68.3227L196 8Z"
          fill="#3300FF"
        />
        <path
          d="M13.7135 239L8 183.333L190.412 11L198 69.9384L13.7135 239Z"
          fill="#3300FF"
        />
        <path
          d="M323.171 308L523 142.097L202.073 75L18 244.124L323.171 308ZM224.442 117.331L431.644 160.402L304.914 265.989L110.557 222.478L224.442 117.331Z"
          fill="#3300FF"
        />
        <path
          d="M125 218.219L161.466 184.611L292.551 211.378L362.822 153L416 164.036L303.009 258L125 218.219Z"
          fill="#69D2E7"
        />
      </svg>
    </div>
  );
}
