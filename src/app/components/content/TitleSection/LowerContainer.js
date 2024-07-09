import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function LowerContainer({ styles, secondContainer }) {
  const textRef = useRef();

  useGSAP(() => {
    if (!textRef.current || !secondContainer.current) return;

    const split = new SplitText(textRef.current, { type: 'chars' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: secondContainer.current,
        pin: true,
        scrub: 0.8,
        // markers: true,
        start: 'top 60%',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      split.chars,
      { y: 500, opacity: 1 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'circ.out', stagger: 0.02 }
    ).to(
      split.chars,
      {
        overflow: 'normal',
        y: -500,
        duration: 0.8,
        stagger: 0.02,
      },
      '+=0.5' // Delay before starting the exit animation
    );

    return () => {
      split.revert(); // Clean up the SplitText instance
      tl.kill(); // Kill the timeline
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className={styles.LowerContainer}>
      <div className={styles.LowerContent} ref={secondContainer}>
        <h1 ref={textRef}>I think we should work together!</h1>
      </div>
    </div>
  );
}
